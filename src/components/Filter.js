import React, { memo, useRef } from 'react'

const Filter = memo(({setSortOption, setComputerInfo}) => {

    const selectRef = useRef(null);

    function setTheComputerInfo(){
        const selects = selectRef.current.getElementsByTagName("select");
        setComputerInfo({type:selects[0].value,tier:selects[1].value,os:selects[2].value});
    }

    return (
        <div className="bg-background2 sticky top-16 border-b border-gray pb-2 z-50">
        <div className="flex justify-between px-8 max-w-screen-xl mx-auto">
            <div className="flex">
                <select className="bg-transparent text-secondary" onChange={e => setSortOption(parseInt(e.target.value,10))}>
                    <option value="0">Random</option>
                    <option value="1">Low to High</option>
                    <option value="2">High to Low</option>
                </select>
            </div>
            <div className="flex" ref={selectRef}>
                    <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1" onChange={setTheComputerInfo}>
                        <option value="basic">Basic/Office PC</option>
                        <option value="work">Server/Workstation PC</option>
                        <option value="gaming">Gaming PC</option>
                        <option value="audio">Audio Production</option>
                        <option value="ai">AI/Deep Learning</option>
                        <option value="hometheater">Home Theater PC (HTPC)</option>
                        <option value="silent">Silent PC</option>
                        <option value="crypto">Cryptocurrency Mining</option>
                        <option value="vr">Virtual Reality (VR)</option>
                        <option value="security">Hacking and Security</option>
                    </select>
                    <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1" onChange={setTheComputerInfo}>
                        <option value="budget">Budget</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                        <option value="enthusiast">Enthusiast</option>
                    </select>
                    <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1" onChange={setTheComputerInfo}>
                        <option value="windows">Windows</option>
                        <option value="mac">Mac</option>
                        <option value="linux">Linux</option>
                    </select>
                </div>
            </div>
        </div>
    )
})

export default Filter