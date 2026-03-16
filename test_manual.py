#!/usr/bin/env python3
"""手动测试 - 保持浏览器打开"""

from playwright.sync_api import sync_playwright
import time

def test_manual():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        # 监听控制台
        def handle_console(msg):
            print(f"[浏览器控制台 {msg.type}] {msg.text}")
        page.on("console", handle_console)

        print("1. 打开页面 http://localhost:8092")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        print("\n2. 点击 'A股/港股分析' 标签")
        stocks_tab = page.locator('text="A股/港股分析"')
        stocks_tab.click()
        time.sleep(1)

        print("\n3. 输入搜索关键词 '银行'")
        search_input = page.locator('#marketSearch')
        search_input.fill("银行")
        time.sleep(0.5)

        print("\n4. 点击 '全市场搜索' 按钮")
        search_btn = page.locator('#marketSearchBtn')
        search_btn.click()

        print("\n等待15秒加载数据...")
        time.sleep(15)

        # 检查表格
        table_body = page.locator('#marketTableBody')
        rows = table_body.locator('tr')
        row_count = rows.count()

        print(f"\n表格行数: {row_count}")

        if row_count > 0:
            print("\n前10行内容:")
            for i in range(min(10, row_count)):
                row_text = rows.nth(i).inner_text()
                print(f"  {i+1}. {row_text[:100]}")

        print("\n\n=== 浏览器保持打开，请手动检查页面 ===")
        print("按 Enter 键关闭浏览器...")
        input()

        browser.close()

if __name__ == "__main__":
    test_manual()
