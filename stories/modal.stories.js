import React from 'react'

import create from './create'
import { action } from '@storybook/addon-actions'

import {
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ButtonGroup,
  ProgressBar
} from '../dist'

create('Modal')
  .add('All elements', () => (
    <div className="ola_modal-overlay">
      <div>
        <Modal onClose={action('onClick event')}>
          <ModalHeader title="Modal Header" intro="Lorem ipsum for testing intro">
            <ProgressBar value="20" max="100" />
          </ModalHeader>
          <ModalContent>
            <p>Modal content</p>
          </ModalContent>
          <ModalFooter>
            <ButtonGroup reversed>
              <Button variant='primary'>Primary</Button>
              <Button variant='secondary'>Default Button</Button>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  ))
