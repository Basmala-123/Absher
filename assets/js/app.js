

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#D5BD91"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          // "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#D5BD91",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;
const scrollThreshold = headerHeight ;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > scrollThreshold) {
    header.classList.add('header-solid');
    header.classList.remove('header-transparent');
  } else {
    header.classList.add('header-transparent');
    header.classList.remove('header-solid');
  }
});

const form = document.querySelector('#myForm');
const submitButton = form.querySelector('button[type="submit"]');
submitButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('Iam_Individual', form.querySelector('#flexRadioDefault1').checked);
  formData.append('Iam_Owner_Of_CallCenter', form.querySelector('#flexRadioDefault2').checked);
  formData.append('email', form.querySelector('#Email').value);
  formData.append('name', form.querySelector('#Name').value);
  formData.append('phone', form.querySelector('#number').value);
  formData.append('skype', form.querySelector('#skype').value);
  formData.append('age', form.querySelector('#age').value);
  formData.append('location', form.querySelector('#Location').value);
  formData.append('previousExperience', form.querySelector('#experience').value);
  formData.append('DialedVertical', form.querySelector('select').value);
  const entries = Array.from(formData.entries());
  const formDataObject = Object.fromEntries(entries);
  console.log(formDataObject);

  fetch('https://acc-company.onrender.com/SendInformation', {
    method: 'POST',
    mode:'no-cors',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    
    body:formDataObject
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert('Form submitted successfully!');
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    alert('There was an error submitting the form. Please try again later.');
  });
}
