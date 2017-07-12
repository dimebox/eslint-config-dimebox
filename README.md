
## eslint-config-dimebox

The style guide for JavaScript / TypeScript projects.

### JavaScript

In the `./package.json`

```json
"devDependencies": {
	"eslint": "^3.19.0",
	"eslint-config-dimebox": "git+https://git@github.com/dimebox/eslint-config-dimebox.git",
	"eslint-plugin-import": "^2.6.1"
}
```

In the `./eslintrc.json`

```json
{
	"extends": "dimebox/server/javascript"
}
```

### TypeScript

In the `./package.json`

```json
"devDependencies": {
	"eslint-config-dimebox": "git+https://git@github.com/dimebox/eslint-config-dimebox.git",
	"tslint": "5.0.0"
}
```

In the `./tslint.json`

```json
{
	"extends": "dimebox/server/typescript"
}
```
