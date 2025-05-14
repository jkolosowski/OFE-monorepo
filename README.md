# Opanuj Frontend: AI Edition - Monorepo

![](./_resources/img/header.png)

## Co w środku?

Monorepozytorium Lerna+Nx z dwiema paczkami:

- `@przeprogramowani/design-tokens` - podstawowe zmienne wizualne
- `@przeprogramowani/core-components` - komponenty Shoelace ostylowane za pomocą design-tokens

Do tego:

- Storybook pozwalający na pracę z komponentami
- Workflow GHA automatyzujący weryfikację PRa (`checks.yaml`)
- Workflow GHA automatyzujący publikację paczek oraz Storybooka (`publish.yaml`)

## Pierwsze kroki

1. Utwórz forka i skonfiguruj sekrety: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` oraz `GH_REPO_ACCESS_TOKEN` (Settings/Secrets and variables/Actions)

2. Przydziel uprawnienia read/write dla GHA (Settings/Actions/General)

3. Ustaw "Source" publikacji Github Pages na "Actions" (Settings/Pages)

4. Zaktualizuj pliki `./.npmrc` oraz `update-token.sh` zgodnie ze wskazówkami z lekcji 4x3.

```bash
nvm use
npm install
npm run storybook
```
