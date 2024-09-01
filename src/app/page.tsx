import React from 'react';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    name: "薄型・軽量Bluetoothパンタグラフミニキーボード",
    description: "持ち運びに便利な最薄部が6.5mm、重さが264gの薄型・軽量Bluetooth(R)パンタグラフミニキーボードです。",
    features: [
      "最大3台までのデバイスをペアリング可能",
      "Windows 10、Android 9.0、macOS Catalina(10.15)、iOS13.4対応",
      "外形寸法: 幅286.5mm×奥行121.5mm×高さ20.4mm",
      "質量: 約264g（電池を含まず）",
      "78キー日本語配列",
      "13種類のマルチファンクションキーを搭載",
    ],
    link: "https://amzn.to/4e7m9pu"
  },
  {
    id: 2,
    name: "タオル研究所の軽量タオル",
    description: "軽くて薄い新感覚のタオル。薄手なのに肌当たりがふわふわで軽やか、毛羽落ちが少なく吸水性が良いのが特徴です。",
    features: [
      "エアリー感のあるタオル",
      "収納性が高い",
      "Japan Technology",
      "綿100%で安心",
      "パイル立ちの良い繊細な風合い",
      "洗顔・スキンケアに最適",
    ],
    link: "https://amzn.to/4cJywXX"
  },
  {
    id: 3,
    name: "LG 24インチモニター",
    description: "24インチIPS モニター、最大解像度 1920×1080、アスペクト比 16:9のハイスペックモニター。",
    features: [
      "画面サイズ: 24インチ",
      "最大解像度: 2560x1440",
      "アスペクト比: 16:9",
      "コントラスト比: 1000:1",
      "輝度: 250cd/㎡",
      "色域: 72% NTSC",
      "リフレッシュレート: 100Hz",
      "HDR10対応",
    ],
    link: "https://amzn.to/4cSLp1I"
  },
  {
    id: 4,
    name: "24インチIPSモニター",
    description: "24インチIPS モニター、最大解像度1920×1080、アスペクト比16:9、HDR10対応のハイスペックモニター。",
    features: [
      "画面サイズ: 24インチ",
      "最大解像度: 1920×1080",
      "リフレッシュレート: 100Hz",
      "応答速度: 5ms",
      "傾斜角度調整: 上下22°/－5°",
      "アイケア機能搭載",
      "HDMI×1、USBType-C2.5W×1",
      "スピーカー（2Wx2）内蔵",
    ],
    link: "https://amzn.to/4dBR0e5"
  },
  {
    id: 5,
    name: "Logicool G PRO X ゲーミングヘッドセット",
    description: "プロゲーマーと共同開発した次世代ゲーミングヘッドセット「PRO X」。ハイレベルなプレイに対応する充実の音声伝達機能とクリアで正確なサウンドを提供。",
    features: [
      "DTS Headphone:X 2.0 サラウンドサウンド対応",
      "BLUE VO!CE リアルタイム音声フィルター搭載",
      "50㎜大口径オーディオドライバー「Pro-G」",
      "ハイブリッドメッシュ素材のイヤーパッド",
      "6mmのブームマイク搭載",
      "高級アルミニウムとスチールヘッドバンド",
      "Windows 7以降、PlayStation 5、PlayStation 4対応",
    ],
    link: "https://amzn.to/3TdbeCC"
  },
  {
    id: 6,
    name: "Logicool G PRO X SUPERLIGHT ゲーミングマウス",
    description: "独自のワイヤレス技術LIGHTSPEED搭載、最軽量80gのプロ向けワイヤレスゲーミングマウス。",
    features: [
      "LIGHTSPEED ワイヤレステクノロジー搭載",
      "最軽量80g",
      "最大解像度25,600DPIのマウスセンサー「Hero 25K」",
      "LIGHTSYNC RGB対応",
      "8個のカスタマイズ可能なボタン",
      "左右対称型デザイン",
      "Windows7以降、Mac OS 10.11以降対応",
    ],
    link: "https://amzn.to/3MvcBc4"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">おすすめ電子機器</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="text-center py-4">
        <p>© 2024 電子機器紹介サイト</p>
      </footer>
    </div>
  );
}

