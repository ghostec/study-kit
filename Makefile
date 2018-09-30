setup:
	@npm i -g babel standard prettier-standard eslint eslint-plugin-babel babel-eslint eslint-config-standard
	@npm i

dev-run:
	@OAUTH2_ENABLED=false npm run server:dev
