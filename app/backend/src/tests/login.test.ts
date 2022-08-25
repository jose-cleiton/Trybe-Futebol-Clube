import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import users from '../database/models/users.model';
import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testantdo login', () => {
  

   let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjE0NDg4MzksImV4cCI6MTY2MjA1MzYzOX0.wHl394SoTYkZsXObGKVQvow5JtZCu89IcVndSBShObo"

  it('Verificando login com informações corretas',async () => {
      sinon.stub(users, 'findOne').resolves({}as Model)
      const Response = await chai.request(app).post('/login').send({
        email: "admin@admin.com",
        password:"$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW"
      }).set('authorization', token)
console.log(Response.body);

    expect(Response.status).to.be.eq(200);
    sinon.restore()

    expect(Response.body).to.be.an('object')
  });

});


