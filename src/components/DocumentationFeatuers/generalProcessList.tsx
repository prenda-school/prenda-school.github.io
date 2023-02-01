import Link from '@docusaurus/Link'
import React from 'react'

type Process = {
  shortName: string,
  filename: string,
}

const processes: Process[] = [{
  shortName: 'Import',
  filename: 'import'
}]

export default function GenerateProcessesList () {
  return (
    <ul>
      {processes.map(({ shortName, filename }) => {
        return (
          <li>
            <Link to={`CriticalProcesses/${filename}`}>{ shortName }</Link>
          </li>
        )
      })}
    </ul>
  )
}
