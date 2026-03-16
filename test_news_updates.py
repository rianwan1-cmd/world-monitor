#!/usr/bin/env python3
"""测试新闻更新机制"""

from playwright.sync_api import sync_playwright
import time

def test_news_updates():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        print("1. 访问页面")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(3)

        global_news = page.locator('#globalNews .news-item')
        china_news = page.locator('#chinaNews .news-item')

        print(f"\n初始状态:")
        print(f"  全球新闻: {global_news.count()} 条")
        print(f"  中国新闻: {china_news.count()} 条")

        print("\n等待35秒观察新闻更新...")
        time.sleep(35)

        print(f"\n35秒后:")
        print(f"  全球新闻: {global_news.count()} 条")
        print(f"  中国新闻: {china_news.count()} 条")

        if global_news.count() > 1:
            print("\n✅ 全球新闻已更新")
        if china_news.count() > 1:
            print("✅ 中国新闻已更新")

        print("\n再等待35秒...")
        time.sleep(35)

        print(f"\n70秒后:")
        print(f"  全球新闻: {global_news.count()} 条 (最多5条)")
        print(f"  中国新闻: {china_news.count()} 条 (最多3条)")

        print("\n新闻列表:")
        for i in range(min(5, global_news.count())):
            text = global_news.nth(i).inner_text()
            print(f"  全球 {i+1}: {text[:60]}")

        for i in range(min(3, china_news.count())):
            text = china_news.nth(i).inner_text()
            print(f"  中国 {i+1}: {text[:60]}")

        print("\n按 Enter 关闭...")
        try:
            input()
        except:
            pass

        browser.close()

if __name__ == "__main__":
    test_news_updates()
