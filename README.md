# YeaHub — База вопросов для подготовки к интервью

Веб-приложение для IT-собеседований. Поддерживает фильтрацию, поиск, пагинацию и детальный просмотр каждого вопроса.

## Демо

> 🔗 [yeahub.vercel.app](https://yeahub-hazel.vercel.app)

---

## Функциональность

- 📋 **Список вопросов** — отображение вопросов с кратким ответом в виде аккордеона
- 🔍 **Поиск** — поиск по названию вопроса с debounce
- 🎛️ **Фильтрация** — по специализации, навыкам, сложности и рейтингу
- 📄 **Пагинация** — навигация по страницам с сохранением в URL
- 📖 **Страница вопроса** — полный и краткий ответ, навыки, ключевые слова
- 💀 **Skeleton-загрузка** — плавный UX при загрузке данных
- 📱 **Адаптивный дизайн** — мобильная версия с боковой панелью фильтров

---

## Технологии

| Категория | Стек |
|---|---|
| UI | React 18, TypeScript |
| Стейт | Redux Toolkit |
| API | RTK Query |
| Роутинг | React Router v6 |
| Стили | CSS Modules |
| Сборка | Vite |
| Деплой | Vercel |

---

## Архитектура

Проект построен по методологии **Feature Sliced Design (FSD)**:

```
src/
├── app/                        # Инициализация приложения
│   ├── layouts/                # BaseLayout
│   ├── styles/                 # Глобальные стили, переменные, шрифты
│   ├── store.ts                # Redux store
│   └── appRouter.tsx           # Роутер с lazy loading
│
├── pages/                      # Страницы
│   ├── questions-list/         # Страница списка вопросов + скелетон
│   └── question-details/       # Страница вопроса + скелетон
│
├── widgets/                    # Самостоятельные блоки UI
│   ├── header/                 # Шапка с навигацией
│   ├── footer/                 # Подвал
│   ├── questions-list/         # Виджет списка вопросов
│   ├── question-filters/       # Виджет фильтров
│   └── question-details/       # Виджет детального просмотра
│
├── features/                   # Пользовательские сценарии
│   ├── question-filters/       # Логика фильтров + slice
│   └── question-navigation/    # Навигация между вопросами
│
├── entities/                   # Бизнес-сущности
│   ├── question/               # API, типы, QuestionCard
│   ├── skill/                  # API, типы
│   └── specialization/         # API, типы
│
└── shared/                     # Переиспользуемый код
    ├── api/                    # baseApi (RTK Query)
    ├── assets/                 # Иконки, шрифты, изображения
    ├── config/                 # ROUTES
    ├── constants/              # Пагинация, фильтры, сложность, рейтинг
    ├── lib/
    │   ├── hooks/              # useAppDispatch, useAppSelector, useDebounce
    │   └── utils/              # cn(), sanitizeHtml()
    └── ui/                     # UI Kit
        ├── Accordion
        ├── BackButton
        ├── Button
        ├── Chip
        ├── Container
        ├── Drawer
        ├── ErrorBoundary
        ├── FilterSection
        ├── FilterToggle
        ├── Logo
        ├── NavLink
        ├── NoResults
        ├── Overlay
        ├── Pagination
        ├── SearchInput
        ├── SidePanel
        ├── Skeleton
        ├── Surface
        └── errors/PageError
```

---

## Запуск локально

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/yeahub.git
cd yeahub

# Установить зависимости
npm install

# Создать .env файл
cp .env.example .env

# Запустить dev-сервер (порт 3000 обязателен из-за CORS)
npm run dev
```

### Переменные окружения

```env
VITE_API_URL=https://api.yeatwork.ru/api
```

> ⚠️ Локальный сервер должен работать на порту **3000** — иначе API будет возвращать ошибки CORS.

---

## Используемые API

| Endpoint | Описание |
|---|---|
| `GET /questions/public-questions` | Список вопросов с фильтрацией и пагинацией |
| `GET /questions/public-questions/:id` | Детальная информация о вопросе |
| `GET /specializations` | Список специализаций |
| `GET /skills` | Список навыков |

Полная документация: [api.yeatwork.ru/api](https://api.yeatwork.ru/api)

---

## UI Kit

В `shared/ui` собраны все базовые компоненты приложения. Импорт через единый barrel:

```ts
import { Button, Chip, Skeleton, Surface } from '@/shared/ui'
```

Дизайн-токены (цвета, отступы, радиусы, тени, анимации) вынесены в CSS-переменные в `shared/ui/styles/variables.css`
