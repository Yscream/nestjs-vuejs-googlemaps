up:
	docker-compose up --build -d
	cd client && npm install && npm run serve

down:
	docker-compose down