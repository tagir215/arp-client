import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

const ComputerFrom = memo(() => {
  const type = "Select the computer type. This will affect each components budget."
  const tier = "Select computers price tier. Algorithm will aim to stay within the price range."
  const os = "Select the operating system that's going to be pre-installed. No extra cost"
  const navigate = useNavigate();

  function handleOnClick(){
    const selects = document.getElementsByTagName("select");
    const typeValue = selects[0].value;
    const tierValue = selects[1].value;
    const osValue = selects[2].value;
    navigate(`/grid?type=${typeValue}&tier=${tierValue}&os=${osValue}`);
  }



  return (
    <div className="flex flex-col max-w-xs bg-background2 rounded-md mx-auto mb-20 mt-10 py-5 px-5">
        <label className="text-text2 text-xs italic">{type}</label>
        <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1">
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
        <label className="text-text2 text-xs italic">{tier}</label>
        <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1">
          <option value="budget">Budget</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
          <option value="enthusiast">Enthusiast</option>
        </select>
        <label className="text-text2 text-xs italic">{os}</label>
        <select className="p-1 rounded-sm mb-4 mt-1 bg-background border-2 border-slate-400 text-text1">
          <option value="windows">Windows</option>
          <option value="mac">Mac</option>
          <option value="linux">Linux</option>
        </select>

        <button type="submit" onClick={handleOnClick} className="bg-emerald-400 mt-3 max-w-fit px-10 py-1 rounded-md mx-auto text-lg">Continue</button>
    
    </div>
  )
})

export default ComputerFrom