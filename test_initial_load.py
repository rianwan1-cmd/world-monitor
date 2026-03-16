#!/usr/bin/env python3
"""测试首次加载"""

from playwright.sync_api import sync_playwright
import time

def test_initial_load():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        # 监听控制台
        console_messages = []
        def handle_console(msg):
            console_messages.append(f"[{msg.type}] {msg.text}")
        page.on("console", handle_console)

        print("1. 访问页面 http://localhost:8092")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(3)

        print("\n2. 检查默认标签页（应该是宏观经济）")
        active_tab = page.locator('.nav-tab.active')
        tab_text = active_tab.inner_text()
        print(f"   当前激活标签: {tab_text}")

        print("\n3. 检查面板显示状态")
        stocks_panel = page.locator('#stocksPanel')
        other_panel = page.locator('#otherPanel')
        macro_panel = page.locator('#macroPanel')
        left_panel = page.locator('.left-panel')

        stocks_visible = stocks_panel.is_visible()
        other_visible = other_panel.is_visible()
        macro_visible = macro_panel.is_visible()
        left_visible = left_panel.is_visible()

        print(f"   stocksPanel 可见: {stocks_visible}")
        print(f"   otherPanel 可见: {other_visible}")
        print(f"   macroPanel 可见: {macro_visible}")
        print(f"   leftPanel 可见: {left_visible}")

        print("\n4. 检查新闻是否加载")
        global_news = page.locator('#globalNews .news-item')
        china_news = page.locator('#chinaNews .news-item')

        global_count = global_news.count()
        china_count = china_news.count()

        print(f"   全球新闻条数: {global_count}")
        print(f"   中国新闻条数: {china_count}")

        if global_count > 0:
            print("\n   全球新闻示例:")
            for i in range(min(2, global_count)):
                news_text = global_news.nth(i).inner_text()
                print(f"     {i+1}. {news_text[:80]}")

        if china_count > 0:
            print("\n   中国新闻示例:")
            for i in range(min(2, china_count)):
                news_text = china_news.nth(i).inner_text()
                print(f"     {i+1}. {news_text[:80]}")

        print("\n5. 等待30秒观察新闻更新...")
        time.sleep(30)

        global_count_after = global_news.count()
        china_count_after = china_news.count()

        print(f"   30秒后全球新闻条数: {global_count_after}")
        print(f"   30秒后中国新闻条数: {china_count_after}")

        # 打印控制台错误
        errors = [msg for msg in console_messages if 'error' in msg.lower()]
        if errors:
            print("\n6. 控制台错误:")
            for err in errors[:5]:
                print(f"   {err}")

        print("\n\n=== 测试完成，浏览器保持打开 ===")
        print("按 Enter 键关闭...")
        try:
            input()
        except:
            pass

        browser.close()

if __name__ == "__main__":
    test_initial_load()
