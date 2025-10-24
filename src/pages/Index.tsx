import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Capability {
  id: number;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

interface Application {
  id: number;
  title: string;
  description: string;
  impact: string;
  icon: string;
}

const capabilities: Capability[] = [
  {
    id: 1,
    title: 'Обработка естественного языка',
    description: 'ИИ понимает и генерирует человеческий язык, ведет диалоги и переводит тексты',
    icon: 'MessageSquare',
    examples: ['Чат-боты', 'Переводчики', 'Генерация текстов', 'Анализ тональности']
  },
  {
    id: 2,
    title: 'Компьютерное зрение',
    description: 'Распознавание и анализ изображений, видео и визуальных данных',
    icon: 'Eye',
    examples: ['Распознавание лиц', 'Медицинская диагностика', 'Автономные авто', 'Контроль качества']
  },
  {
    id: 3,
    title: 'Машинное обучение',
    description: 'Обучение на данных и выявление паттернов для прогнозирования',
    icon: 'Brain',
    examples: ['Рекомендательные системы', 'Прогнозы', 'Детекция аномалий', 'Классификация']
  },
  {
    id: 4,
    title: 'Генерация контента',
    description: 'Создание изображений, музыки, видео и других медиа',
    icon: 'Sparkles',
    examples: ['Генерация изображений', 'Музыкальные композиции', 'Видео', 'Дизайн']
  }
];

const applications: Application[] = [
  {
    id: 1,
    title: 'Здравоохранение',
    description: 'Диагностика заболеваний, разработка лекарств и персонализированная медицина',
    impact: 'Спасение миллионов жизней',
    icon: 'HeartPulse'
  },
  {
    id: 2,
    title: 'Образование',
    description: 'Персональные учебные программы и адаптивное обучение для каждого студента',
    impact: 'Доступное качественное образование',
    icon: 'GraduationCap'
  },
  {
    id: 3,
    title: 'Экология',
    description: 'Мониторинг климата, оптимизация энергопотребления и защита природы',
    impact: 'Борьба с изменением климата',
    icon: 'Leaf'
  },
  {
    id: 4,
    title: 'Наука',
    description: 'Ускорение научных открытий и анализ больших данных',
    impact: 'Прорывы в физике и биологии',
    icon: 'Atom'
  },
  {
    id: 5,
    title: 'Транспорт',
    description: 'Автономные транспортные системы и оптимизация логистики',
    impact: 'Безопасность и эффективность',
    icon: 'Car'
  },
  {
    id: 6,
    title: 'Творчество',
    description: 'Помощь художникам, музыкантам и дизайнерам в создании работ',
    impact: 'Новые формы искусства',
    icon: 'Palette'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Brain" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Future</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('capabilities')} 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Возможности
              </button>
              <button 
                onClick={() => scrollToSection('applications')} 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Применение
              </button>
              <button 
                onClick={() => scrollToSection('future')} 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Будущее
              </button>
              <Button>Узнать больше</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2">Технология будущего</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Искусственный интеллект:
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                Новая эра человечества
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Узнайте, как ИИ трансформирует нашу жизнь, открывает невероятные возможности 
              и формирует будущее технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('capabilities')}>
                <Icon name="Rocket" size={20} className="mr-2" />
                Исследовать возможности
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('applications')}>
                <Icon name="Compass" size={20} className="mr-2" />
                Области применения
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">100+ млрд</h3>
                <p className="text-muted-foreground">параметров в современных моделях</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">15.7 трлн $</h3>
                <p className="text-muted-foreground">вклад в мировую экономику к 2030</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Все отрасли</h3>
                <p className="text-muted-foreground">трансформируются с помощью ИИ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Возможности ИИ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что умеет искусственный интеллект</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современный ИИ обладает широким спектром способностей, которые продолжают расширяться
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card 
                key={capability.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={capability.icon as any} size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                      <CardDescription className="text-base">{capability.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Примеры применения:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {capability.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Области применения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ИИ меняет мир</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Искусственный интеллект трансформирует ключевые отрасли и улучшает качество жизни
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {applications.map((app, index) => (
              <Card 
                key={app.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon name={app.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                  <CardDescription className="text-sm">{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Icon name="Target" size={16} />
                    <span>{app.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="future" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4">Взгляд в будущее</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Потенциал искусственного интеллекта</h2>
              <p className="text-xl text-muted-foreground">
                Мы только в начале пути. Будущее ИИ открывает невероятные перспективы
              </p>
            </div>

            <Tabs defaultValue="near" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="near">Ближайшие годы</TabsTrigger>
                <TabsTrigger value="medium">Через 10 лет</TabsTrigger>
                <TabsTrigger value="far">Далекое будущее</TabsTrigger>
              </TabsList>
              
              <TabsContent value="near" className="space-y-4 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      2024-2027
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Персональные ИИ-помощники</p>
                        <p className="text-sm text-muted-foreground">Умные ассистенты станут незаменимыми в повседневной жизни</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Автоматизация рутинных задач</p>
                        <p className="text-sm text-muted-foreground">ИИ возьмет на себя большинство монотонных процессов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Революция в творчестве</p>
                        <p className="text-sm text-muted-foreground">Инструменты генерации контента станут доступны каждому</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="medium" className="space-y-4 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      2030-2035
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Sparkles" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Прорывы в медицине</p>
                        <p className="text-sm text-muted-foreground">ИИ поможет победить многие болезни и продлить жизнь</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Sparkles" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Умные города</p>
                        <p className="text-sm text-muted-foreground">Инфраструктура городов станет полностью автоматизированной</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Sparkles" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Персонализированное образование</p>
                        <p className="text-sm text-muted-foreground">Каждый получит индивидуальную программу обучения</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="far" className="space-y-4 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Infinity" size={20} className="text-primary" />
                      2040+
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Rocket" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Общий искусственный интеллект (AGI)</p>
                        <p className="text-sm text-muted-foreground">ИИ достигнет уровня человеческого интеллекта во всех областях</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Rocket" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Решение глобальных проблем</p>
                        <p className="text-sm text-muted-foreground">Климат, голод, болезни — ИИ поможет решить вызовы человечества</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Rocket" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Освоение космоса</p>
                        <p className="text-sm text-muted-foreground">ИИ станет ключевым инструментом для исследования Вселенной</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Icon name="Star" size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Будущее создается сегодня</h2>
            <p className="text-lg mb-8 text-white/90">
              Искусственный интеллект — это не просто технология. Это новая глава в истории человечества, 
              которая откроет невероятные возможности для каждого из нас
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              Подписаться на обновления
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Brain" size={28} />
                <span className="text-xl font-bold">AI Future</span>
              </div>
              <p className="text-sm text-white/80">
                Исследуем возможности и потенциал искусственного интеллекта
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#capabilities" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#applications" className="hover:text-white transition-colors">Применение</a></li>
                <li><a href="#future" className="hover:text-white transition-colors">Будущее</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Исследования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости ИИ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Github" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 AI Future. Создано для исследования возможностей ИИ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
