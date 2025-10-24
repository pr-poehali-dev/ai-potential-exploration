import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress?: number;
  enrolled?: boolean;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Основы программирования',
    description: 'Изучите базовые концепции программирования с нуля',
    duration: '8 недель',
    level: 'Начальный',
    progress: 65,
    enrolled: true,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Веб-разработка',
    description: 'Создавайте современные веб-приложения с React',
    duration: '12 недель',
    level: 'Средний',
    progress: 30,
    enrolled: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Data Science',
    description: 'Анализ данных и машинное обучение на Python',
    duration: '10 недель',
    level: 'Продвинутый',
    enrolled: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'UX/UI Дизайн',
    description: 'Создание интуитивных пользовательских интерфейсов',
    duration: '6 недель',
    level: 'Начальный',
    enrolled: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [enrolledCourses] = useState(courses.filter(c => c.enrolled));

  const stats = {
    totalCourses: enrolledCourses.length,
    completedLessons: 24,
    averageProgress: Math.round(
      enrolledCourses.reduce((acc, course) => acc + (course.progress || 0), 0) / enrolledCourses.length
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-2xl font-bold">EduPlatform</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveTab('home')} 
                className={`font-medium transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('courses')} 
                className={`font-medium transition-colors ${activeTab === 'courses' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Курсы
              </button>
              <button 
                onClick={() => setActiveTab('dashboard')} 
                className={`font-medium transition-colors ${activeTab === 'dashboard' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                Личный кабинет
              </button>
              <button className="font-medium text-foreground hover:text-primary transition-colors">FAQ</button>
              <button className="font-medium text-foreground hover:text-primary transition-colors">О платформе</button>
              <button className="font-medium text-foreground hover:text-primary transition-colors">Блог</button>
            </div>
            <Button>Войти</Button>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <>
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Обучайтесь в своем темпе
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Получите доступ к сотням курсов от ведущих экспертов. Развивайте навыки и достигайте целей с личным кабинетом.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" onClick={() => setActiveTab('courses')}>
                    Начать обучение
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('dashboard')}>
                    Мой прогресс
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Популярные курсы</h2>
                <p className="text-muted-foreground">Выберите курс и начните учиться сегодня</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                  <Card 
                    key={course.id} 
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={course.enrolled ? "default" : "outline"}>
                          {course.level}
                        </Badge>
                        {course.enrolled && (
                          <Badge variant="secondary" className="gap-1">
                            <Icon name="CheckCircle" size={14} />
                            Записан
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          <span>Онлайн</span>
                        </div>
                      </div>
                      {course.enrolled && course.progress !== undefined ? (
                        <div className="space-y-2">
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">Прогресс: {course.progress}%</p>
                        </div>
                      ) : (
                        <Button className="w-full">Записаться</Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'courses' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Каталог курсов</h1>
              <p className="text-muted-foreground">Найдите идеальный курс для ваших целей</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{course.level}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      {course.enrolled ? 'Продолжить обучение' : 'Записаться на курс'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'dashboard' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Личный кабинет</h1>
              <p className="text-muted-foreground">Отслеживайте свой прогресс и достижения</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Активные курсы</CardTitle>
                  <Icon name="BookOpen" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalCourses}</div>
                  <p className="text-xs text-muted-foreground mt-1">курса в процессе</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Пройдено уроков</CardTitle>
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.completedLessons}</div>
                  <p className="text-xs text-muted-foreground mt-1">уроков завершено</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Средний прогресс</CardTitle>
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.averageProgress}%</div>
                  <p className="text-xs text-muted-foreground mt-1">по всем курсам</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="progress" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="progress">Мой прогресс</TabsTrigger>
                <TabsTrigger value="achievements">Достижения</TabsTrigger>
              </TabsList>
              
              <TabsContent value="progress" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Активные курсы</h2>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <Card key={course.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={course.image} 
                                alt={course.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-lg">{course.title}</h3>
                                  <p className="text-sm text-muted-foreground">{course.description}</p>
                                </div>
                                <Badge>{course.level}</Badge>
                              </div>
                              <div className="space-y-2 mt-4">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">Прогресс курса</span>
                                  <span className="font-medium">{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-3" />
                              </div>
                              <div className="flex items-center gap-4 mt-4">
                                <Button size="sm">Продолжить обучение</Button>
                                <Button size="sm" variant="outline">
                                  <Icon name="Calendar" size={16} className="mr-2" />
                                  Расписание
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Ваши достижения</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Award" size={32} className="text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Первые шаги</h3>
                      <p className="text-sm text-muted-foreground">Завершите первый урок</p>
                    </Card>
                    <Card className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Target" size={32} className="text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Целеустремленный</h3>
                      <p className="text-sm text-muted-foreground">Завершите 10 уроков</p>
                    </Card>
                    <Card className="text-center p-6 opacity-50">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Trophy" size={32} className="text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">Чемпион</h3>
                      <p className="text-sm text-muted-foreground">Завершите курс полностью</p>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      <footer className="bg-secondary text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-white/80">
                Образовательная платформа для развития навыков и достижения целей
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
