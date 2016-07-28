
.PHONY: all app container clean push deploy

all: app container clean

app: .
	meteor build --directory build

container: .
	docker build -t acatmore/portfolio .

clean: .
	rm -rf build

push: .
	docker push acatmore/portfolio

deploy: .
	ssh root@acatmore.com bash -c "echo 'Deploying'; docker pull acatmore/portfolio; docker rm -f portfolio; docker run -d --name portfolio -p 80:80 acatmore/portfolio"
