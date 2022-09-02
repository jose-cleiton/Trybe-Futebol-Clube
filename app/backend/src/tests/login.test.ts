import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Model } from 'sequelize/types';
import users from '../database/models/users.model';

chai.use(chaiHttp);

const { expect } = chai;
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjE0NDg4MzksImV4cCI6MTY2MjA1MzYzOX0.wHl394SoTYkZsXObGKVQvow5JtZCu89IcVndSBShObo"

describe('Testantdo login', () => {
  



  
  
  
  
 
   
  




 


  it('Verificando login com informações corretas',async () => {
    sinon.stub(users, 'findOne').resolves({
      email: "admin@admin.com",
      password:"$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
    } as any)
      
      const Response = await chai.request(app).post('/login').send({
        email: "admin@admin.com",
        password:"$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
      }).set('authorization', token)


    expect(Response.status).to.be.eq(200);
    

    expect(Response.body).to.be.an('object')
    sinon.restore()
  });


  it('Verificando login com informações corretas',async () => {
    sinon.stub(users, 'findOne').resolves(undefined)

      
    const Response = await chai.request(app).post('/login').send({
      email: "adminadmin.com",
      password:"$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
    })


  expect(Response.status).to.be.equal(401);
  
  sinon.restore()
  
});

});


