FROM node:argon
WORKDIR /code
ADD . /code
EXPOSE 8080
CMD ["npm", "start", "--production"]
