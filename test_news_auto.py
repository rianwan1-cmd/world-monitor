#!/usr/bin/env python3
"""测试新闻更新机制 - 自动版本"""

from playwright.sync_api import sync_playwright
import time

def test_news_updates():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
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

        global_count = global_news.count()
        china_count = china_news.count()

        print(f"\n35秒后:")
        print(f"  全球新闻: {global_count} 条")
        print(f"  中国新闻: {china_count} 条")

        if global_count > 1:
            print("\n✅ 全球新闻已更新 (有新条目)")
        else:
            print("\n⚠️  全球新闻未增加新条目")

        if china_count > 1:
            print("✅ 中国新闻已更新 (有新条目)")
        else:
            print("⚠️  中国新闻未增加新条目")

        print("\n新闻内容示例:")
        if global_count > 0:
            for i in range(min(3, global_count)):
                text = global_news.nth(i).inner_text().replace('\n', ' ')
                print(f"  全球 {i+1}: {text[:80]}")

        if china_count > 0:
            for i in range(min(3, china_count)):
                text = china_news.nth(i).inner_text().replace('\n', ' ')
                print(f"  中国 {i+1}: {text[:80]}")

        browser.close()
        print("\n测试完成")

if __name__ == "__main__":
    test_news_updates()
