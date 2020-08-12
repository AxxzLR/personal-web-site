import React from 'react'
import '../assets/styles/components/SkillModule.scss'
import SkillItem from './SkillItem'

const Skills = ({ info, titleServices }) => (
    <div className="Skill__container">
        {info.map(item => (
            <SkillItem key={item.id} {...item} titleServices={titleServices} />
        ))}
    </div>
)

export default Skills