const RegisteredUsers = [
    {
        user_id: 1,
        name:'BITS Faculty 1',
        role: 'faculty',
        email: 'bits-faculty1@bits-pilani.com',
        dob: '23/10/1982',
        password:'Password123*#'
    },
    {
        user_id: 2,
        name:'BITS Faculty 2',
        role: 'faculty',
        email: 'bits-faculty2@bits-pilani.com',
        dob: '3/03/1985',
        password:'Password123*#'
    },
    {
        user_id: 3,
        name:'Student 1',
        role: 'student',
        email: 'student-1@bits-pilani.com',
        dob: '13/04/1996',
        password:'Password123*#'
    },
    {
        user_id: 4,
        name:'Student 4',
        role: 'student',
        email: 'student-1@bits-pilani.com',
        dob: '19/08/1992',
        password:'Password123*#'
    },

];


const coursesAssigned = [
    {
      key: '1',
      name: 'Web Development',
      students: [
        {
          name:'Vishnu Baliga',
          id: 21,
          email:'baliga.vishnu@bits-pilani.com'
        },
        {
          name:'Jitesh',
          id: 21,
          email:'jitesh@bits-pilani.com'
        },
        {
          name:'Akhil Nair',
          id: 21,
          email:'Akhil.nair@bits-pilani.com'
        },
      ],
      duration: '01-Feb-2021 to 03-Mar-2021',
      modules: [
        {
            name:'Module 1: Web Application - Introduction'
        },
        {
            name:'Module 2: User Interfaces and User Experience'
        },
        {
            name:'Module 3: Frontend Development'
        },
        {
            name:'Module 4: Backend Development'
        },
    ],
    evaluations: [
        {
            name:'Quiz - 1',
            type:'quiz',
            date:'10/02/2021 09:00 pm',
            totalMarks: 10
        },
        {
            name:'Quiz - 2',
            type:'quiz',
            date:'20/02/2021 08:00 pm',
            totalMarks: 10
        },
        {
            name:'Assignment - 1',
            type:'assignment',
            date:'25/02/2021 07:00 pm',
            totalMarks: 20
        },
        {
            name:'Assignment - 2',
            type:'assignment',
            date:'25/02/2021 09:00 pm',
            totalMarks: 20
        },
    ],

    },
    {
      key: '2',
      name: 'Mobile Development',
      students: [
        {
        name:'Rupesh',
        id: 21,
        email:'rupesh@bits-pilani.com'
        },
        {
        name:'Sanjana',
        id: 21,
        email:'sanjana@bits-pilani.com'
        },
        {
        name:'Venugopal',
        id: 21,
        email:'venu@bits-pilani.com'
        },
        {
        name:'Vaishnavi',
        id: 21,
        email:'vaishnavi@bits-pilani.com'
        },
          
        {
          name:'Vishnu Baliga',
          id: 21,
          email:'baliga.vishnu@bits-pilani.com'
        },
        {
          name:'Jitesh',
          id: 21,
          email:'jitesh@bits-pilani.com'
        },
        {
          name:'Akhil Nair',
          id: 21,
          email:'Akhil.nair@bits-pilani.com'
        },
       
      ],
      duration: '04-Mar-2021 to 05-Apr-2021',
      modules: [
          {
              name:'Module 1: Mobile Development - Introduction'
          }, 
          {
              name:'Module 2: Backend Intergration'
          },
          {
              name:'Module 3: Publishing in App Store'
          },
      ],
      evaluations: [
          {
              name:'Quiz - 1',
              type:'quiz',
              date:'10/03/2021 09:00 pm',
              totalMarks: 10
          },
          {
              name:'Quiz - 2',
              type:'quiz',
              date:'20/03/2021 08:00 pm',
              totalMarks: 10
          },
          {
              name:'Assignment - 1',
              type:'assignment',
              date:'25/03/2021 09:00 pm',
              totalMarks: 20
          },
      ],
    },
   
  ];

     
export {RegisteredUsers, coursesAssigned}