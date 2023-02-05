import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School as SchoolIcon, Work as WorkIcon } from "@material-ui/icons";


function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education' date="Mar'16-Mar'17" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Ch. Chhabil Dass Public School, Ghaziabad, India
                    </h3>
                    <p>High School</p>
                    <p>Percentage: 95%</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' date="Mar'18-Mar'19" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Ch. Chhabil Dass Public School, Ghaziabad, India
                    </h3>
                    <p>Intermediate</p>
                    <p>Percentage: 96%</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' date="Aug'19-May'23" iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>
                        KIET GROUP OF INSTITUTIONS, Ghaziabad, India
                    </h3>
                    <p>Bachelor Of Technology (Computer Science and Engineering)</p>
                    <p>Percentage: 88%</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--work' date="Dec'21-May'22" iconStyle={{background: '#e9d35b', color: '#fff'}} icon={<WorkIcon/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Prepbytes, Noida, India
                    </h3>
                    <p>Problem Setter and Tester Intern</p>
                    <p>Skills: Data Structures, Algorithms</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--work' date="Jun'22-Aug'22" iconStyle={{background: '#e9d35b', color: '#fff'}} icon={<WorkIcon/>}>
                    <h3 className='vertical-timeline-element-title'>
                        Bytelearn, India
                    </h3>
                    <p>Software Engineer Intern</p>
                    <p>Skills: Python, JSON, Worked on Chatbot</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Experience;