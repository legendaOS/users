fetch('http://run.mocky.io/v3/ad0e44c6-328b-42c2-a02d-9890d79137d7')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const adminUsers = data.filter(function(user) {
            return user.admin === true;
        });
        console.log(adminUsers.slice(0, 30));
    })
    .catch(function(error) {
        console.error('Произошла ошибка:', error);
    });

