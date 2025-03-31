# Vite + Elysia + Turborepo Монорепозиторій

Цей проект є монорепозиторієм, який використовує Turborepo для управління декількома пакетами. Проект поєднує Vite для фронтенду та Elysia для бекенду.

## Структура проекту

```plaintext
apps/
  ├── client/     # Vite frontend додаток
  └── server/     # Elysia backend додаток
packages/
  └── shared/     # Спільні типи та утиліти
```

## Технології

- 🏗️ **Turborepo** - Система управління монорепозиторієм
- ⚡ **Vite** - Frontend інструмент збірки
- 🚀 **Elysia** - Backend фреймворк на Bun
- 🎯 **TypeScript** - Типізована мова програмування

## Початок роботи

### Передумови

- Встановлений [Bun](https://bun.sh)
- Встановлений [Node.js](https://nodejs.org)

### Встановлення

```bash
# Клонування репозиторію
git clone <repository-url>

# Встановлення залежностей
bun install
```

### Команди

```bash
# Запуск всіх додатків в режимі розробки
bun dev

# Збірка всіх додатків
bun build

# Запуск тестів
bun test

# Запуск лінтера
bun lint
```

## Розробка

- Frontend доступний за адресою: `http://localhost:4000`
- Backend API доступний за адресою: `http://localhost:3000`

## Ліцензія

MIT
