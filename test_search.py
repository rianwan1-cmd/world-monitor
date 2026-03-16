#!/usr/bin/env python3
"""测试 World Monitor 的股票搜索功能"""

from playwright.sync_api import sync_playwright
import time

def test_stock_search():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        print("1. 访问页面...")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        # 截图初始状态
        page.screenshot(path="screenshot_1_initial.png")
        print("   截图: screenshot_1_initial.png")

        print("\n2. 点击 'A股/港股分析' 标签...")
        stocks_tab = page.locator('text="A股/港股分析"')
        stocks_tab.click()
        time.sleep(1)
        page.screenshot(path="screenshot_2_stocks_tab.png")
        print("   截图: screenshot_2_stocks_tab.png")

        print("\n3. 查找搜索框...")
        search_input = page.locator('#marketSearch')
        if search_input.count() == 0:
            print("   ❌ 错误: 找不到 #marketSearch 输入框")
            browser.close()
            return

        print("   ✓ 找到搜索框")

        print("\n4. 输入搜索关键词 '平安'...")
        search_input.fill("平安")
        time.sleep(0.5)
        page.screenshot(path="screenshot_3_input.png")
        print("   截图: screenshot_3_input.png")

        print("\n5. 点击 '全市场搜索' 按钮...")
        search_btn = page.locator('#marketSearchBtn')
        if search_btn.count() == 0:
            print("   ❌ 错误: 找不到 #marketSearchBtn 按钮")
            browser.close()
            return

        # 监听控制台消息
        console_messages = []
        page.on("console", lambda msg: console_messages.append(f"[{msg.type}] {msg.text}"))

        # 监听网络请求
        requests = []
        page.on("request", lambda req: requests.append(f"{req.method} {req.url}"))

        search_btn.click()
        print("   等待搜索结果...")
        time.sleep(3)

        page.screenshot(path="screenshot_4_result.png")
        print("   截图: screenshot_4_result.png")

        print("\n6. 检查控制台消息:")
        for msg in console_messages[-10:]:
            print(f"   {msg}")

        print("\n7. 检查网络请求:")
        baostock_requests = [r for r in requests if 'localhost:5000' in r]
        if baostock_requests:
            print("   ✓ 发现 Baostock API 请求:")
            for req in baostock_requests:
                print(f"     {req}")
        else:
            print("   ❌ 没有发现 Baostock API 请求")

        print("\n8. 检查表格内容...")
        table_body = page.locator('#marketTableBody')
        rows = table_body.locator('tr')
        row_count = rows.count()
        print(f"   表格行数: {row_count}")

        if row_count > 0:
            first_row_text = rows.first.inner_text()
            print(f"   第一行内容: {first_row_text[:100]}")

        print("\n9. 检查元数据显示...")
        meta = page.locator('#marketMeta')
        if meta.count() > 0:
            meta_text = meta.inner_text()
            print(f"   元数据: {meta_text}")

        print("\n测试完成，浏览器保持打开状态，按 Ctrl+C 退出...")
        input()

        browser.close()

if __name__ == "__main__":
    test_stock_search()
