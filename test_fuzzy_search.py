#!/usr/bin/env python3
"""测试模糊搜索功能"""

from playwright.sync_api import sync_playwright
import time

def test_fuzzy_search():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        print("1. 访问页面...")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        print("\n2. 点击 'A股/港股分析' 标签...")
        stocks_tab = page.locator('text="A股/港股分析"')
        stocks_tab.click()
        time.sleep(1)

        print("\n3. 输入搜索关键词 '银行'...")
        search_input = page.locator('#marketSearch')
        search_input.fill("银行")
        time.sleep(0.5)

        print("\n4. 点击 '全市场搜索' 按钮...")
        search_btn = page.locator('#marketSearchBtn')

        # 监听网络请求
        requests = []
        page.on("request", lambda req: requests.append(f"{req.method} {req.url}"))

        # 监听控制台消息
        console_messages = []
        page.on("console", lambda msg: console_messages.append(f"[{msg.type}] {msg.text}"))

        search_btn.click()
        print("   等待搜索结果...")
        time.sleep(15)  # 增加等待时间，等待并行请求完成

        page.screenshot(path="screenshot_fuzzy_search.png")
        print("   截图: screenshot_fuzzy_search.png")

        print("\n5. 检查控制台消息:")
        for msg in console_messages[-20:]:
            print(f"   {msg}")

        print("\n6. 检查网络请求:")
        baostock_requests = [r for r in requests if 'localhost:5000' in r]
        print(f"   发现 {len(baostock_requests)} 个 Baostock API 请求")
        for req in baostock_requests[:5]:
            print(f"     {req}")

        print("\n7. 检查表格内容...")
        table_body = page.locator('#marketTableBody')
        rows = table_body.locator('tr')
        row_count = rows.count()
        print(f"   表格行数: {row_count}")

        if row_count > 0:
            print(f"\n   前5行内容:")
            for i in range(min(5, row_count)):
                row_text = rows.nth(i).inner_text()
                print(f"     {i+1}. {row_text[:80]}")

        print("\n8. 检查元数据显示...")
        meta = page.locator('#marketMeta')
        if meta.count() > 0:
            meta_text = meta.inner_text()
            print(f"   元数据: {meta_text}")

        print("\n✅ 测试完成！浏览器保持打开，按 Enter 退出...")
        try:
            input()
        except:
            pass

        browser.close()

if __name__ == "__main__":
    test_fuzzy_search()
