YARN=yarn

install:
	$(YARN) install

compile:
	$(YARN) run compile

run: install compile
	$(YARN) run start
	

