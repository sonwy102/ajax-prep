
function submitProfile(evt) {
  evt.preventDefault();

  const formData = {
    name: $('#name-field').val(),
    age: $('#age-field').val(),
    occupation: $('#occupation-field').val(),
    education: $('#education-field').val(),
    salary: $('#salary-field').val(),
    state: $('#state-field').val(),
    city: $('#city-field input:checked').val(),
    garden: $('#garden input:checked').val(),
    tv: $('select[name="tv"]').val()
  };

  $.post('/api/profile', formData, (response) => {
    $('#profile-response').html(`
      <li>${response.fullname} the ${response.occupation} is ${response.age}.</li>
      <li>${response.fullname}'s highest education level is ${response.education}. 
      They earn $${response.salary} a year.</li>
      <li>${response.fullname} lives in ${response.city} ${response.state}.</li>
    `);

    if (response.garden === 'yes') {
      $("#profile-response").append(`
        <li>${response.fullname} likes to garden.</li>
      `);
    } else {
      $("#profile-response").append(`
        <li>${response.fullname} does not garden.</li>
      `);
    }

    if (response.tv === 'none') {
      $("#profile-response").append(`
        <li>${response.fullname} does not watch TV.</li>
      `);
    } else if (response.tv === 'bingewatcher') {
      $("#profile-response").append(`
        <li>${response.fullname} is a bingewatcher when it comes to TV.</li>
      `);
    } else {
      $("#profile-response").append(`
        <li>${response.fullname} watches ${response.tv} hours of TV.</li>
      `);
    }
  });
}

$("#profile-form").on('submit', submitProfile);