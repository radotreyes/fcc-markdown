import React from 'react'
import { shallow } from 'enzyme'
import Panel from '../components/Panel'

const testPropsWithEditor = {
    backgroundColor: '#eee',
    handleChange: () => true,
    type: 'editor',
    width: '30%'
}

// const testPropsWithPreview = {
//     backgroundColor: '#eee',
//     handleChange: () => true,
//     type: 'preview',
//     width: '30%'    
// }

it( 'should render exactly one PanelContainer', () => {
    const mount = shallow( <Panel { ...testPropsWithEditor } /> )
    expect( mount.find( 'PanelContainer' ) ).toHaveLength( 0 )
} )