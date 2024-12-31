
    
const employees = [
  {
    "id": 1,
    "first_name": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Task 1",
        "task_description": "Complete the project report",
        "task_date": "2024-12-28",
        "category": "Work",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 2",
        "task_description": "Attend the team meeting",
        "task_date": "2024-12-29",
        "category": "Meeting",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 3",
        "task_description": "Submit the timesheet",
        "task_date": "2024-12-30",
        "category": "Admin",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_number": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "first_name": "Ravi",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Task 1",
        "task_description": "Prepare the presentation",
        "task_date": "2024-12-28",
        "category": "Work",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 2",
        "task_description": "Review the project plan",
        "task_date": "2024-12-29",
        "category": "Review",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 3",
        "task_description": "Update the client on progress",
        "task_date": "2024-12-30",
        "category": "Client",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_number": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "first_name": "Suresh",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Task 1",
        "task_description": "Fix the bugs in the code",
        "task_date": "2024-12-28",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 2",
        "task_description": "Test the new features",
        "task_date": "2024-12-29",
        "category": "Testing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 3",
        "task_description": "Deploy the application",
        "task_date": "2024-12-30",
        "category": "Deployment",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_number": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "first_name": "Vijay",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Task 1",
        "task_description": "Design the new logo",
        "task_date": "2024-12-28",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 2",
        "task_description": "Create marketing materials",
        "task_date": "2024-12-29",
        "category": "Marketing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 3",
        "task_description": "Launch the campaign",
        "task_date": "2024-12-30",
        "category": "Campaign",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_number": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "first_name": "Rahul",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Task 1",
        "task_description": "Analyze the sales data",
        "task_date": "2024-12-28",
        "category": "Analysis",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 2",
        "task_description": "Prepare the financial report",
        "task_date": "2024-12-29",
        "category": "Finance",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Task 3",
        "task_description": "Present the findings to the team",
        "task_date": "2024-12-30",
        "category": "Presentation",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_number": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  }
];


  



const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "admin123",
      "role": "superadmin",
      "permissions": ["read", "write", "delete"]
    }
]
  

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return{employees, admin}
    
}