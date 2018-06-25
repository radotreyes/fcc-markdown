import React from 'react'
import { shallow } from 'enzyme'
import Panel from '../components/Panel'

it( 'should render exactly one PanelContainer', () => {
    const mount = shallow(
        <Panel
            backgroundColor="#eee"
            handleChange={ () => true }
            type="editor"
            width="30%"
        />
    )

    expect( mount.find( 'PanelContainer' ) ).toHaveLength( 0 )
} )