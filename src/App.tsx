import image_00ab98ce4480b634710cc35cb88cca9f3d7dc505 from './assets/00ab98ce4480b634710cc35cb88cca9f3d7dc505.png';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Linkedin, User, ExternalLink } from 'lucide-react';
import profileImage from './assets/17ecd522989c05047ae901363a67581d6d5232b2.png';
import giftsLogo from './assets/91775a717e5c980ce6c70e35b38a84184c36134c.png';
import plantIllustration from './assets/f5c432937f20fbf70571e2e154f872b3d8b4d978.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './components/ui/carousel';

export default function App() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleLinkClick = (url: string, linkName: string) => {
    console.log(`Navigating to: ${linkName} - ${url}`);
    // In a real app: window.open(url, '_blank');
  };

  // カルーセルのスライド設定（4つのスライド）
  const slides = [
    {
      id: 'slide-1',
      type: 'news',
      title: '軽井沢PJメンバー\n学生参加者募集中',
      content: 'GifTsでは、軽井沢を拠点とした新しいプロジェクトを始動します。地域と共に成長し、革新的な取り組みにチャレンジしたいメンバーを募集しています。',
      subContent: '自然豊かな環境で、新しい働き方とクリエイティブな活動を一緒に創造しませんか？',
      link: 'https://sites.google.com/view/gifts-foryou/4thentry_student',
      linkText: '詳細を見る',
      badge: 'NEW',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      id: 'slide-2',
      type: 'about',
      title: 'GifTsについて',
      content: 'GifTsは、デジタル時代における新しいコミュニケーションを創造する組織です。',
      subContent: '私たちデジタル広報チームは、革新的なアプローチで情報を発信し、多くの人々とつながりを築いています。',
      bgGradient: 'from-blue-50 to-green-50'
    },
    {
      id: 'slide-3',
      type: 'team',
      title: 'デジタル広報チーム',
      content: 'OURA Sora / 大浦 空が所属するデジタル広報チームです。',
      subContent: '最新のデジタル技術とクリエイティブな発想で、GifTsの魅力を世界に発信しています。',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 'slide-4',
      type: 'links',
      title: 'もっと詳しく',
      bgGradient: 'from-gray-50 to-green-50'
    }
  ];

  // 自動再生機能
  useEffect(() => {
    if (!api) return;

    const autoPlayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000); // 5秒ごとに次へ

    return () => clearInterval(autoPlayInterval);
  }, [api]);

  // プログレスバーのアニメーション
  useEffect(() => {
    if (!api) return;

    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2; // 5秒で100%（50回 × 100ms）
      });
    }, 100);

    const onSelect = () => {
      setProgress(0);
      clearInterval(progressInterval);
    };

    api.on('select', onSelect);

    return () => {
      clearInterval(progressInterval);
      api.off('select', onSelect);
    };
  }, [api, current]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // タップで前後移動
  const handleTapNavigation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!api) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 2) {
      api.scrollPrev();
    } else {
      api.scrollNext();
    }
  }, [api]);

  return (
    <div className="min-h-screen bg-[#d4e5a5] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md relative">
        {/* Background decorative plant illustration */}
        <motion.img
          src={plantIllustration}
          alt="Plant decoration"
          className="absolute top-0 left-0 w-48 h-auto opacity-80 pointer-events-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
        />

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center pt-12 pb-8">
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-lg ring-4 ring-white/50">
              <img
                src={image_00ab98ce4480b634710cc35cb88cca9f3d7dc505}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl">OURA</span>
              <span className="text-2xl">Sora</span>
            </div>
            <h1 className="text-5xl mb-2">大浦　空</h1>
          </motion.div>

          {/* Personal Links - Icon buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('https://www.linkedin.com/in/sola1216/', 'LinkedIn')}
              className="w-16 h-16 bg-[#0066b2] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('https://v0-mypage2githubio.vercel.app/', 'My Page')}
              className="w-16 h-16 bg-[#a8c028] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="My Page"
            >
              <User className="w-8 h-8 text-white" />
            </motion.button>
          </motion.div>

          {/* Instagram Story-style Carousel */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-sm px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Progress bars */}
              <div className="flex gap-1 p-2 bg-white">
                {slides.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gray-900"
                      initial={{ width: '0%' }}
                      animate={{
                        width: index < current ? '100%' : index === current ? `${progress}%` : '0%'
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                ))}
              </div>

              {/* Carousel */}
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem key={slide.id}>
                      <div
                        onClick={handleTapNavigation}
                        className={`relative min-h-[400px] bg-gradient-to-br ${slide.bgGradient} p-8 cursor-pointer`}
                      >
                        {/* Slide 1: Latest News */}
                        {slide.type === 'news' && (
                          <div className="flex flex-col justify-center h-full">
                            <div className="mb-4">
                              <span className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">
                                {slide.badge}
                              </span>
                            </div>
                            <h2 className="text-3xl mb-4 whitespace-pre-line" style={{ fontFamily: 'serif' }}>
                              {slide.title}
                            </h2>
                            <p className="text-base leading-relaxed mb-3 text-gray-700">
                              {slide.content}
                            </p>
                            <p className="text-sm leading-relaxed mb-6 text-gray-600">
                              {slide.subContent}
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLinkClick(slide.link!, slide.linkText!);
                              }}
                              className="inline-flex items-center gap-2 bg-[#a8c028] text-white px-6 py-3 rounded-full hover:bg-[#96aa22] transition-colors w-fit"
                            >
                              <span>{slide.linkText}</span>
                              <ExternalLink className="w-4 h-4" />
                            </motion.button>
                          </div>
                        )}

                        {/* Slide 2: About GifTs */}
                        {slide.type === 'about' && (
                          <div className="flex flex-col justify-center h-full">
                            <div className="mb-6">
                              <img src={giftsLogo} alt="GifTs" className="h-10 w-auto mb-4" />
                            </div>
                            <h2 className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>
                              {slide.title}
                            </h2>
                            <p className="text-base leading-relaxed mb-3 text-gray-700">
                              {slide.content}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-600">
                              {slide.subContent}
                            </p>
                          </div>
                        )}

                        {/* Slide 3: Team Info */}
                        {slide.type === 'team' && (
                          <div className="flex flex-col justify-center h-full">
                            <div className="mb-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md">
                                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">OURA Sora</p>
                                  <p className="text-xs text-gray-500">大浦 空</p>
                                </div>
                              </div>
                            </div>
                            <h2 className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>
                              {slide.title}
                            </h2>
                            <p className="text-base leading-relaxed mb-3 text-gray-700">
                              {slide.content}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-600">
                              {slide.subContent}
                            </p>
                          </div>
                        )}

                        {/* Slide 4: Links */}
                        {slide.type === 'links' && (
                          <div className="flex flex-col justify-center h-full">
                            <h2 className="text-3xl mb-6" style={{ fontFamily: 'serif' }}>
                              {slide.title}
                            </h2>
                            <div className="space-y-3">
                              <motion.button
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick('https://sites.google.com/view/gifts-foryou', 'GifTs HP');
                                }}
                                className="w-full flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">🌐</span>
                                  <span className="text-base">GifTs 公式HP</span>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#a8c028] transition-colors" />
                              </motion.button>

                              <motion.button
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick('https://www.linkedin.com/company/105043219', 'GifTs LinkedIn');
                                }}
                                className="w-full flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">💼</span>
                                  <span className="text-base">GifTs 公式LinkedIn</span>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#0066b2] transition-colors" />
                              </motion.button>
                            </div>
                            <p className="text-xs text-gray-500 mt-6 text-center">
                              詳しい情報はこちらから
                            </p>
                          </div>
                        )}

                        {/* Tap hint indicators */}
                        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Navigation Arrows */}
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Footer hint */}
              <div className="bg-white px-4 py-3 text-center border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  {current + 1} / {count} • スワイプまたはタップで切り替え
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background GifTs logo - more subtle */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md opacity-20 pointer-events-none blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img
            src={giftsLogo}
            alt="GifTs"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
