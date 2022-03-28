import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "Computer Programming",
//     description:
//       "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
//   },
//   {
//     _id: uuid(),
//     categoryName: "Frontend Development",
//     description:
//       "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
//   },
//   {
//     _id: uuid(),
//     categoryName: "Backend Development",
//     description:
//       "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
//   },
// ];

export const categories = [
  {   
    _id: uuid(),
    id:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq29zM4sZ-T8wWl6usxGEUJ7WGgi76uCrsuA&usqp=CAU",
    title:"Healthcare Devices",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. one",

    subcategory:[
        "BP monitors",
        "Weighing Scales",
        "Glucometers",
        "Excercise equipments",
        "Pulse oximeter",
        "Vital Signs monitors & wearables",
        "Thermometers",
        "Body Massager",
        "Nebulizers & Vaporizers",
        "Mobility Equipments",
        "Supports & Braces", 
        "Asthama Pumps",
        "insulin infusion pumps"
    ]
   },
{   
    _id: uuid(),
    id:2,
    img:"https://www.choosetolivebetter.com/sites/default/files/eating-drinking-final_0.png",
    title:"Healthy Food and Drinks",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:["Weight Gain", "Weight Loss", "Immunity booker", "Eat this not that", "healthy breakfast" , "healthy breakfast for Diabeties", "Diet Tips", "Food for perfectly toned body" ]
},
{   
    _id: uuid(),
    id:3,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MESVejz1iRQmGH6c6GPlyXWVIvW7JZYBGw&usqp=CAU",
    title:"Personal Care",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:["Skin care", 
                "Hair care", 
                "Personal hygiene", 
                "Personal care products", 
                "Female hygiene porducts", 
                "Self care tips", 
                "dental care products",
                ]
  },
{   
    _id: uuid(),
    id:4,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1szF8AlO1frM0h0ccv_P8Gz6qcu_ZSUwtw&usqp=CAU",
    title:"Ayurveda",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:["Ayurveda basics",
                "Ayurveda tips",
                "Ayurveda  for Pain relief", 
                "Ayurveda  for Hair care",
                "Ayurveda  for Skin Care",
                "Ayurveda  for  Digestive Care",
                "Ayurveda  for Liver Health",
                "Ayurveda  for cold n cough",
                "Ayurveda  for Diabetes Care",
                "Ayurveda  for  Cholestrol control",
                "Ayurveda  for Respiratory relief",
            ]
},
{   _id: uuid(),
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65XbvKpRNM3EGa5eD-fJZ0g1SuX-vB1UZAw&usqp=CAU",
    title:"Pregnancy",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory: ["Pregnancy symptoms",
                    "Pregnancy do's",
                    "Pregnancy dont's",
                    "Pregnancy tips",
                    "Pregnancy yoga",
                    "Pregnancy & diabetes",
                ]
},
{   
    _id: uuid(),
    id:5,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMwm6TBBFCUDrNGVwVYwkF-unbjvf4RgAbw&usqp=CAU",
    title:"Skin Care",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:[ "Dryness",
        "Acne Treatment",
        "Tan Removal",
        "Dark Circles",
        "Sun Protection",
        "Prevention & Protection",
        "Make Up Remover",
        "Anti-Aging",
        "Uneven Skin Tone",
        "Pigmentation",
        "Pore Tightening",
        "Lightening And Brightening",
        "Oil Control"
    ]
},
{   
    _id: uuid(),
    id:6,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYoE82xIpzqwAcxdajyBPDq3mJeLSAU4JFg&usqp=CAU",
    title:"Diabetes",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:["Diabetes symptoms",
        "type-1 Diabetes",
        "type-2 Diabetes",
        "diabetes excercise ",
        "Diabetes drugs",
        "healthy eating with Diabetes",
        "Diabetes do's",
        "Diabetes dont's",
       " Health porblems caused by diabetes",
        "Glucose Insulin and Diabetes",
        "diabeties  insulin infusion pumps",
  ]
},
{   
    _id: uuid(),
    id:7,
    img:"https://preview.pixlr.com/images/800wm/1503/1/1503120701.jpg",
    title:"Health Condition",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory: ["Cancer",
        "Cholesterol",
        "Covid-19",
        "High Blood Pressure",
        "HIV/AIDS",
        "Hyperthermia",
        "Hypothermia",
        "Heart attack",
        "Obesity",
        "Mental Health",
        "Brain tumours",
        "respiratory problems"
  ]
},
{   _id: uuid(),
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jzzTKtx1E-gr2g4ci-qHkforVpf8kc-Ogw&usqp=CAU",
    title:"Fitness",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory:["Cardio",
                "Aerobics",
                "Full body work out",
                "Lower body workout",
                "body toning",
                "At home core Workouts",
                "Fitness with equipments",    
        ],
},
{   
    _id: uuid(),
    id:9,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJH3TDSrSNaG9kAaH24CgbmUbjUejeWh_fw&usqp=CAU",
    title:"Yoga",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subcategory: ["pregnancy and yoga",
        "yoga for Bp control",
        "Yoga for Diabetes",
        "yoga for beginners",
        "yoga benefits",
        "Yoga For Anxiety and Stress",
        "Morning yoga",
  ]
},
{   
    _id: uuid(),
    id:10,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNT3ozmvVdMCtsL8kgt-1vSjukFvJ8xHID7w&usqp=CAU",
    title:"Healthcare management careers",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brandfilters:["Bactigras Dressing","Ent dressings","NRS HealthCare"],
    productTags:["Physician and Surgeon",
        "Dentist",
        "Podiatrist",
        "Pharmacist",
        "Nurse Practitioner",
        "Optometrist",
        "Physician Assistant",
        "Veterinarian",
        "Physical Therapist",
        "Occupational Therapist"
      ]
  }
]
