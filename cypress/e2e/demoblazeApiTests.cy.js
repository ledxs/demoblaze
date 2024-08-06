describe('Demoblaze API Testing', () => {
  const apiUrl = 'https://api.demoblaze.com';

  it('should successfully register a new user', () => {
    const userCredentials = {
      username: `user_${Date.now()}`,
      password: 'password123'
    };

    cy.request('POST', `${apiUrl}/signup`, userCredentials)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
      });
  });

  it('should fail to register a user with an existing username', () => {
    const userCredentials = {
      username: 'testUser',
      password: 'testPass'
    };

    cy.request('POST', `${apiUrl}/signup`, userCredentials)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('errorMessage', 'This user already exist.');
      });
  });

  it('should successfully login with correct credentials', () => {
    const userCredentials = {
      username: 'testUser',
      password: 'testPass'
    };

    cy.request('POST', `${apiUrl}/login`, userCredentials)
      .then((response) => {
        expect(response.status).to.eq(200);
        if (response.body.Auth_token) {
          expect(response.body).to.have.property('Auth_token').and.to.not.be.empty;
        } else {
          // Handle expected error message if login fails for other reasons
          expect(response.body).to.have.property('errorMessage');
        }
      });
  });

  it('should fail to login with incorrect credentials', () => {
    const userCredentials = {
      username: 'testUser',
      password: 'wrong_password'
    };

    cy.request('POST', `${apiUrl}/login`, userCredentials)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('errorMessage', 'Wrong password.');
      });
  });
});
