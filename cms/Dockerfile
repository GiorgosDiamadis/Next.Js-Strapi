FROM node:14
RUN mkdir /srv/app
RUN chmod -R 777 /srv/app
COPY . .
RUN npm install

CMD [ "tail","-f","/dev/null" ]

#3.6.8