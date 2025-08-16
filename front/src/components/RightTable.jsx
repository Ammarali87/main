import { useState } from 'react';

const weekData = [
  {  
    title: 'Week 1–3',
    sections: [
      {
        title: 'Section 1: Fundamentals',
        items: [
          'Digital Marketing Strategies',
          'Introduction to SEO',
          'Marketing Funnels Explained',
        ],
      },
      {
        title: 'Section 2: SEO Basics',
        items: [
          'Understanding Search Engines',
          'Keyword Research Techniques',
          'On-Page vs Off-Page SEO',
        ],
      },
      {
        title: 'Section 3: Content Strategy',
        items: [
          'Content Planning',
          'Blog Writing Best Practices',
          'Using AI in Content Creation',
        ],
      },
      {
        title: 'Section 4: Assessment',
        items: ['Knowledge Check', 'Module Assessment'],
      },
      {
        title: 'Section 5: Quiz',
        items: ['Final Quiz'],
      },
    ],
  },
  {
    title: 'Week 4–6',
    sections: [
      {
        title: 'Section 6: Social Media Marketing',
        items: [
          'Facebook and Instagram Ads',
          'Social Media Algorithms',
          'Engagement Strategies',
        ],
      },
      {
        title: 'Section 7: Email Marketing',
        items: [
          'Email List Building',
          'Crafting High-Open Emails',
          'Automation Tools',
        ],
      },
      {
        title: 'Section 8: Analytics & Tracking',
        items: [
          'Google Analytics Overview',
          'Using UTM Parameters',
          'KPIs & Reporting',
        ],
      },
    ],
  },
  {    
    title: 'Week 7–10',
    sections: [
      {
        title: 'Section 9: Paid Ads',
        items: [
          'Google Ads Basics',
          'Display vs Search Network',
          'Budget Planning',
        ],
      },
      {
        title: 'Section 10: E-commerce SEO',
        items: [
          'Product Page Optimization',
          'Structured Data for Products',
          'Shopify vs WooCommerce SEO',
        ],
      },
      {
        title: 'Section 11: Final Project',
        items: ['Capstone Assignment', 'Presentation Preparation'],
      },
    ],
  },
];

function RightTable() {
  // One state to hold all checkboxes: weekIndex -> sectionIndex -> itemIndex
  const [checkedItems, setCheckedItems] = useState(
    weekData.map(week => week.sections.map(section => section.items.map(() => false)))
  );

  // Track which accordion is open
  const [openSection, setOpenSection] = useState({ week: null, section: null });

  const toggleSection = (weekIndex, sectionIndex) => {
    setOpenSection(prev =>
      prev.week === weekIndex && prev.section === sectionIndex
        ? { week: null, section: null }
        : { week: weekIndex, section: sectionIndex }
    );
  };

  const handleCheckboxChange = (weekIndex, sectionIndex, itemIndex) => {
    const updated = [...checkedItems];
    updated[weekIndex][sectionIndex][itemIndex] = !updated[weekIndex][sectionIndex][itemIndex];
    setCheckedItems(updated);
  };

  return (
    <div className="p-4 bg-transparent/20 rounded shadow-md mt-11 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Topics for this Course</h2>

      {weekData.map((week, weekIndex) => (
        <div key={weekIndex} className="bg-white p-3 mb-6 rounded shadow">
          <h3 className="text-lg font-semibold mt-2 mb-2 text-violet-600">{week.title}</h3>

          {week.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-2 rounded">
              <button
                onClick={() => toggleSection(weekIndex, sectionIndex)}
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
              >
                {section.title}
              </button>

              {openSection.week === weekIndex && openSection.section === sectionIndex && (
                <ul className="px-6 py-2 bg-gray-50">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center space-x-2 py-1 text-gray-800"
                    >
                      <input
                        type="checkbox"
                        className="accent-violet-500 cursor-pointer"
                        checked={checkedItems[weekIndex][sectionIndex][itemIndex]}
                        onChange={() =>
                          handleCheckboxChange(weekIndex, sectionIndex, itemIndex)
                        }  
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RightTable;




















// import { useState } from 'react';

// function RightTable() {
//   const sections = [
//     {  
//       title: 'Section 1: Fundamentals',
//       items: [
//         'Digital Marketing Strategies',
//         'Introduction to SEO',
//         'Marketing Funnels Explained',
//       ],
//     },
//     {
//       title: 'Section 2: SEO Basics',
//       items: [
//         'Understanding Search Engines',
//         'Keyword Research Techniques',
//         'On-Page vs Off-Page SEO',
//       ],
//     },
//     {
//       title: 'Section 3: Content Strategy',
//       items: [
//         'Content Planning',
//         'Blog Writing Best Practices',
//         'Using AI in Content Creation',
//       ],
//     },
//     {
//       title: 'Section 4: Assessment',
//       items: ['Knowledge Check', 'Module Assessment'],
//     },
//     {
//       title: 'Section 5: Quiz',
//       items: ['Final Quiz'],
//     },
//   ];

//   // Track checked state for each item using a nested array
//   const [checkedItems, setCheckedItems] = useState(
//     sections.map((section) => section.items.map(() => false))
//   );

//   // update check state 
//   const handleCheckboxChange = (sectionIndex, itemIndex) => {
//     const updated = [...checkedItems];
//     updated[sectionIndex][itemIndex] = !updated[sectionIndex][itemIndex];
//     setCheckedItems(updated);
//   };

//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (index) => {
//     setOpenSection(openSection === index ? null : index);
//   };

//   return (
//     <div className="p-4 bg-white rounded shadow-md mt-11
//                     w-full max-w-md 
//                     mx-auto ">
//       <h2 className="text-xl font-bold mb-4 pb-0">Topics for this Course</h2>

//       {sections.map((section, sectionIndex) => (
//         <div key={sectionIndex} className="mb-2 rounded">
//           <button
//             onClick={() => toggleSection(sectionIndex)}
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//           >
//             {section.title}
//           </button>

//           {openSection === sectionIndex && (
//             <ul className="px-6 py-2 bg-gray-50">
//               {section.items.map((item, itemIndex) => (
//                 <li
//                   key={itemIndex}
//                   className="flex items-center space-x-2 py-1 text-gray-800"
//                 >
//                   <input
//                     type="checkbox"
//                     className="accent-violet-500 cursor-pointer"
//                     checked={checkedItems[sectionIndex][itemIndex]}
//                     onChange={() =>
//                       handleCheckboxChange(sectionIndex, itemIndex)
//                     }
//                   />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );   
// }

// export default RightTable;







 


