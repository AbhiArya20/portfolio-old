import React from 'react';
import { FaBriefcase, FaDownload, FaLightbulb, FaSchool } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import { achievements, educationDetails, experienceDetails, interests, projectDetails, resumeSkills, socialConnections } from '../../Data/AllData';

import { nanoid } from '@reduxjs/toolkit';
import { PiCodeFill } from 'react-icons/pi';
import { MdInterests, MdWorkspacePremium } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { IoArrowRedoCircle, IoArrowRedoCircleOutline } from 'react-icons/io5';

export default function ResumePage({ isDarkMode }) {
  const downloadResume = () => {
    const resume = document.getElementById('resume');
    html2pdf(resume, {
      filename: 'Abhishek-Kumar-Resume.pdf',
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  };

  return (
    <>
      <div className='relative py-8 px-4 flex justify-center items-center flex-col page-background'>
        {isDarkMode && (
          <div className='hidden md:block fixed left-[-35%] h-[50vh] w-[50%] top-[50%] rounded-full bg-[var(--color-active-opposite)] overflow-hidden filter drop-shadow-[0_0_100rem_var(--color-active-opposite)] blur-[10rem]'></div>
        )}
        {isDarkMode && (
          <div className='hidden md:block fixed right-[-35%] h-[50vh] w-[50%] top-0 rounded-full bg-[var(--color-active)] overflow-hidden filter drop-shadow-[0_0_100rem_var(--color-active-opposite)] blur-[20rem]'></div>
        )}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex mb-4 transition-colors duration-500' onClick={downloadResume}>
          <FaDownload className='mr-2' />
          Download
        </button>

        <div id='resume' className='rounded-2xl shadow-2xl inputColor max-w-[1100px]'>
          <div className='px-4 md:px-14 pt-6 lg:pt-14 space-y-2 '>
            <div className='flex justify-between items-start gap-8'>
              <h2 className='text-4xl font-semibold '>Abhishek Kumar</h2>
              {/* <a href={'https://abhiarya.in/'} className='flex justify-center items-center gap-2 text-xs font-bold underline text-blue-700'>
                <span className='whitespace-normal whitespace-wrap w-full '>{'Portfolio'}</span>
              </a> */}
            </div>
            <p className='font-semibold text-gray-500 text-base'>
              Motivated software engineer with one year of experience in software development, seeking to join a dynamic team to further develop my skills and contribute to impactful projects.
              Dedicated to leveraging my problem-solving abilities and technical expertise to deliver high-quality software solutions.
            </p>
          </div>

          <div className='flex min-h-8 my-2 px-2 py-1 bg-slate-400 justify-start md:justify-center gap-x-6 gap-y-1 flex-wrap overflow-hidden'>
            {socialConnections.map((socialConnection) => (
              <a key={socialConnection.href} href={socialConnection.href} className='flex justify-center text-black items-center gap-2 text-xs'>
                <span className='text-2xl size-6 '>{socialConnection.icon}</span>
                <span className='whitespace-normal whitespace-wrap w-full '>{socialConnection.value}</span>
              </a>
            ))}
          </div>
          <div className='p-2 sm:p-6 flex flex-col gap-4'>
            {resumeSectionComponentsShorthand.map((resumeSectionComponents) => (
              <div key={resumeSectionComponents.id} className='flex gap-4 flex-col md:flex-row'>
                {resumeSectionComponents?.values?.map(({ id, SVG, section, component }, idx) => (
                  <div key={id} className='w-full md:w-1/2 flex flex-wrap justify-center items-start '>
                    <div className='space-y-2 w-full flex flex-col gap-2'>
                      <div className='w-full flex space-x-3 '>
                        <span className={` ${isDarkMode ? 'text-white' : 'text-black'}`}>{<SVG className='text-2xl' />}</span>
                        <span className='text-xl font-semibold '>{section}</span>
                      </div>
                      <div className='w-full flex flex-wrap gap-4'>{component}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const resumeSectionComponentsShorthand = [
  {
    id: nanoid(),
    values: [
      {
        id: nanoid(),
        SVG: FaBriefcase,
        section: 'Work Experience',
        component: (
          <>
            {experienceDetails.map((experienceDetail) => (
              <div key={experienceDetail.id} className='w-full rounded-lg p-3 flex justify-between resumeSmallContainer '>
                <div>
                  <p className='text-lg flex justify-between '>
                    <span className='font-bold'>{experienceDetail.designation}</span>
                    <span className='text-gray-400 text-sm text-nowrap font-semibold'>{experienceDetail.session}</span>
                  </p>
                  <p className='text-gray-400 font-extrabold'>{experienceDetail.organization}</p>
                  <p className='text-gray-400 text-sm font-normal'>Roles:</p>
                  <ul className='ml-10 list-disc'>
                    {experienceDetail?.roles?.map((role) => (
                      <li key={role} className='text-gray-500 text-sm font-semibold mb-1'>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )
      },

      {
        id: nanoid(),
        SVG: FaLightbulb,
        section: 'Skills',
        component: (
          <>
            {resumeSkills.map((resumeSkill) => (
              <div key={resumeSkill.section} className='w-full rounded-lg p-3 space-y-1 resumeSmallContainer '>
                <p className='font-bold mb-2'>{resumeSkill.section}</p>
                <div className='w-full flex ml-3 flex-wrap gap-2 '>
                  {resumeSkill?.skills?.map((skill) => (
                    <span key={skill} className='skillBgColor p-[.64rem] rounded-md text-sm font-semibold '>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </>
        )
      }
    ]
  },
  {
    id: nanoid(),
    values: [
      {
        id: nanoid(),
        SVG: PiCodeFill,
        section: 'Projects',
        component: (
          <>
            {projectDetails.map((projectDetail) => (
              <div className='w-full rounded-lg p-3 flex justify-between resumeSmallContainer '>
                <div className=''>
                  <p className='text-lg flex justify-between '>
                    <span className='font-bold flex gap-2 items-center'>
                      {projectDetail.name}
                      {/* <a href={projectDetail.github}>
                        <BsGithub className='text-xl' />
                      </a> */}
                      <a href={projectDetail.link}>
                        <IoArrowRedoCircle className='text-2xl' />
                      </a>
                    </span>
                    {/* <span className='text-gray-400 text-sm text-nowrap font-semibold'>{projectDetail.session}</span> */}
                  </p>
                  <p className='text-gray-400 text-sm font-normal'>Achievements:</p>
                  <ul className='ml-10 list-disc'>
                    {projectDetail?.achievements?.map((achievement) => (
                      <li className='text-gray-500 text-sm font-semibold mb-1' key={achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )
      },

      {
        id: nanoid(),
        SVG: FaSchool,
        section: 'Education',
        component: (
          <div className='flex flex-col gap-4'>
            {educationDetails.map((educationDetail) => (
              <div className='w-full rounded-lg p-3 flex justify-between resumeSmallContainer gap-3'>
                <div className='flex flex-col justify-between'>
                  <p className='font-bold'>{educationDetail.degree}</p>
                  <p className='text-gray-400 font-extrabold'>{educationDetail.university}</p>
                </div>
                <div className='flex flex-col justify-between'>
                  <p className='font-extrabold text-right'>{educationDetail.percentage}</p>
                  <p className='text-gray-400 text-sm text-nowrap font-semibold'>{educationDetail.session}</p>
                </div>
              </div>
            ))}

            <div className='w-full flex flex-wrap justify-center items-start '>
              <div className='space-y-2 w-full flex flex-col gap-2'>
                <div className='w-full flex space-x-3 '>
                  <span className={`  'text-white' : 'text-black'}`}>{<MdWorkspacePremium className='text-2xl' />}</span>
                  <span className='text-xl font-semibold '>{'Achievements'}</span>
                </div>
                <div className='flex flex-wrap gap-4 w-full'>
                  {achievements.map((achievement) => (
                    <div className='rounded-lg p-3 flex justify-between resumeSmallContainer w-full'>
                      <div className='flex flex-col w-full'>
                        <div className='flex justify-between'>
                          <p className='font-bold'>{achievement.name}</p>
                          <a className='text-xl' href={achievement.link} target='__black'>
                            <IoArrowRedoCircle className='text-2xl' />
                          </a>
                        </div>
                        <p className='text-gray-500 text-sm font-semibold'>{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='w-full flex flex-wrap justify-center items-start '>
              <div className='space-y-2 w-full flex flex-col gap-2'>
                <div className='w-full flex space-x-3 '>
                  <span className={`  'text-white' : 'text-black'}`}>{<MdInterests className='text-2xl' />}</span>
                  <span className='text-xl font-semibold '>{'Interests'}</span>
                </div>
                <div className='w-full flex flex-wrap gap-4'>
                  <div className='w-full rounded-lg p-3 space-y-1 resumeSmallContainer '>
                    <div className='w-full flex ml-3 flex-wrap gap-2 '>
                      {interests.map((interest) => (
                        <span key={interest} className='skillBgColor p-2 rounded-md text-sm font-semibold '>
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  }
  //   {
  //     id: nanoid(),
  //     values: [
  //       {
  //         id: nanoid(),
  //         SVG: MdWorkspacePremium,
  //         section: 'Achievements',
  //         component: (
  //           <>
  //             {achievements.map((achievement) => (
  //               <div className='w-full rounded-lg p-3 flex justify-between resumeSmallContainer '>
  //                 <div className=''>
  //                   <p className='font-bold'>{achievement.name}</p>
  //                   <p className='text-gray-500 text-sm font-semibold'>{achievement.description}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </>
  //         )
  //       },

  //       {
  //         id: nanoid(),
  //         SVG: MdInterests,
  //         section: 'Interests',
  //         component: (
  //           <div className='w-full rounded-lg p-3 space-y-1 resumeSmallContainer '>
  //             <div className='w-full flex ml-3 flex-wrap gap-2 '>
  //               {interests.map((interest) => (
  //                 <span key={interest} className='skillBgColor p-2 rounded-md text-sm font-semibold '>
  //                   {interest}
  //                 </span>
  //               ))}
  //             </div>
  //           </div>
  //         )
  //       }
  //     ]
  //   }
];
