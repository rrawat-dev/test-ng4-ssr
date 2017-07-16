import 'zone.js';
import 'reflect-metadata';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { platformServer, renderModule, renderModuleFactory } from '@angular/platform-server';
import { AppServerModule } from '../app/app.server.module';
import { Users } from './users';
import { PlatformState } from '@angular/platform-server';
import { provideStore } from '@ngrx/store';
import { AppState } from '../app/reducer';

class Server {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.configureRoutes();
		this.app.listen(3300, () => console.log('Server listening at port:3300'));
	}

	public static bootstrap() {
		return new Server();
	}

	public configureRoutes() {
		this.app.use('/dist', express.static(path.join(__dirname, '../dist')));
		this.app.get('/users', (req, res) => this.renderList(req, res));
		this.app.get('/', (req, res) => this.defaultRoute(req, res));
	}

	public defaultRoute(req, res) {
		renderModule(AppServerModule, {
			document: this.getLayoutHTML(),
			extraProviders: [
				provideStore(AppState, Users)
			]
		}).then(
			(html) => {
				res.end(html);
			}
		);
	}

	public getLayoutHTML() {
		return `
			<!DOCTYPE html>
			<html>
				<head>
					<title>Demo</title>
				</head>
				<body>
					<app></app>
					<script>var data = ${JSON.stringify(Users)}</script>
					<script src="/dist/vendor.bundle.js"></script>
					<script src="/dist/main.bundle.js"></script>
				</body>
			</html>
		`;
	}

	public renderList(req, res) {
		res.end(JSON.stringify(Users));
	}
}

// start server
Server.bootstrap();
