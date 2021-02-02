import React from 'react'
import Subprocessors from './subprocessors'

const m = new Map<string, React.FunctionComponent>();
m.set('subprocessors', Subprocessors)

export default m
