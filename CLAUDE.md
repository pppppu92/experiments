# CLAUDE.md

- 'operational_rules.md'に従って作業を進めること
- 予定された実装は必ず１回で完遂すること
- This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
- このファイルの上６行の変更、削除を禁止する

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Operational Rules
- Follow 'operational_rules.md' requirements strictly
- Complete all planned implementations in a single session
- Always output the Five Principles of Operation at the beginning of any work
- Obtain user confirmation before generating/updating files or executing programs

## Webサイト開発 仕様書
1. プロジェクト概要
目的: 産後の母親、育児相談を希望するユーザーからの依頼を受けるための入口となるWebサイト構築。SEOを意識したサイト構造とコンテンツで、新規顧客獲得を目指す。
ターゲットユーザー: 産後の母親、育児に関する悩みを抱える保護者。
サイトコンセプト: コーラル色を基調とした、シンプルで温かみのあるデザイン。ユーザーが情報を見つけやすく、安心して問い合わせできるサイト。
2. 機能要件
単一ページ構成: 全てのコンテンツを1ページに集約し、スクロールで閲覧できるシングルページデザイン。
画像スライドショー: /images/ディレクトリ内に保存された画像を最大10枚まで自動的に抽出し、スライドショー形式で表示する。
外部リンク設定:
お問い合わせフォーム（URL: https://docs.google.com/forms/d/e/1FAIpQLScUJsiv0SRxWLoH6Np9LiawLZ_eJIppm2XiSc9yWRAuqg8s9Q/viewform?usp=dialog）へのリンク：クリック時に新しいタブで開く。
Instagramへのリンク：クリック時に新しいタブで開く。
レスポンシブデザイン: PC、タブレット、スマートフォンなど、様々なデバイスで最適に表示されるデザイン。
3. ページ構成・コンテンツ
単一ページ内に以下のセクションを上から順に配置する。
自己紹介: 提供者個人の紹介文。
一言メッセージ: 訪問者への歓迎メッセージやサービスへの想い。
仕事の画像: スライドショー形式で表示される写真。
サービス内容: 提供されるサービスの詳細、料金体系など。
お問い合わせ: Googleフォームへのリンク、または簡単な案内文。
SNSリンク: Instagramへのリンク。
4. デザイン要件
基調色: コーラル（#FF7F50）。
配色: コーラルを基調とし、サイト要素に応じてコーラルのグラデーションを背景色として使用。全体的にシンプルで清潔感のあるデザインを目指す。
デザイン参考: 既存のホームページ（https://r.goope.jp/doulahiromi/）の雰囲気を踏まえつつ、より洗練されたデザイン。
5. 技術要件・運用
開発言語・技術: HTML, CSS, JavaScriptを基本とし、シンプルで軽量なサイト構造。
CMS: 導入しない。静的なHTMLファイルでの運用を前提とする。
メンテナンス性: 更新や管理が容易な構造を重視。不要な機能は実装しない。
SEO対策:
ターゲットキーワード: 「産後ケア」「育児」「港区」「品川区」を意識したメタタグ、コンテンツの最適化。
検索エンジンに認識されやすいクリーンなコード。
運用体制: 提供者個人での更新・管理。
