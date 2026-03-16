#!/usr/bin/env python3
"""测试 Apple 风格界面"""

from playwright.sync_api import sync_playwright
import time

def test_apple_style():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        print("1. 访问页面查看 Apple 风格")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        print("\n2. 检查颜色变量")
        bg_primary = page.evaluate("() => getComputedStyle(document.documentElement).getPropertyValue('--bg-primary')")
        accent_blue = page.evaluate("() => getComputedStyle(document.documentElement).getPropertyValue('--accent-blue')")
        print(f"   背景色: {bg_primary.strip()}")
        print(f"   强调色: {accent_blue.strip()}")

        print("\n3. 截图保存")
        page.screenshot(path="apple_style_macro.png", full_page=False)
        print("   已保存: apple_style_macro.png")

        print("\n4. 切换到 A股/港股 标签")
        stocks_tab = page.locator('text="A股/港股"')
        stocks_tab.click()
        time.sleep(2)

        page.screenshot(path="apple_style_stocks.png", full_page=False)
        print("   已保存: apple_style_stocks.png")

        print("\n5. 测试搜索功能")
        search_input = page.locator('#marketSearch')
        search_input.fill("银行")
        time.sleep(1)

        search_btn = page.locator('#marketSearchBtn')
        search_btn.click()
        time.sleep(3)

        page.screenshot(path="apple_style_search.png", full_page=False)
        print("   已保存: apple_style_search.png")

        print("\n✅ Apple 风格界面测试完成")
        print("\n查看截图:")
        print("  - apple_style_macro.png (宏观经济页面)")
        print("  - apple_style_stocks.png (股票分析页面)")
        print("  - apple_style_search.png (搜索结果)")

        print("\n按 Enter 关闭浏览器...")
        try:
            input()
        except:
            pass

        browser.close()

if __name__ == "__main__":
    test_apple_style()
