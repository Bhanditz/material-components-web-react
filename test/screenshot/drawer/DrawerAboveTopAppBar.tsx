import * as React from 'react';
import '../../../packages/drawer/index.scss';
import './index.scss';
import TopAppBar from '../../../packages/top-app-bar/index';
import Drawer, {
  DrawerAppContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '../../../packages/drawer/index';
// https://github.com/material-components/material-components-web-react/pull/432
// not converted because of issue #432
// @ts-ignore
import List from './List.js';
import {MaterialIconProps} from '../../../packages/material-icon/index'; // eslint-disable-line no-unused-vars

interface DrawerScreenshotTestProps {
  onClose: () => void;
  open: boolean;
  title: string;
  modal: boolean;
  dismissible: boolean;
  renderLoremIpsum: (section: number) => JSX.Element;
  renderNavigationIcon: () => React.ReactElement<MaterialIconProps> | undefined;
};

const DrawerScreenshotTest: React.FunctionComponent<DrawerScreenshotTestProps> = ({
  /* eslint-disable react/prop-types */
  onClose,
  open,
  title,
  dismissible,
  modal,
  renderLoremIpsum,
  renderNavigationIcon,
}) => {
  return (
    <div className='drawer-screenshot-test'>
      <Drawer
        open={open}
        onClose={onClose}
        dismissible={dismissible}
        modal={modal}
      >
        <DrawerHeader>
          <DrawerTitle>Inbox</DrawerTitle>
          <DrawerSubtitle>ralph@gmail.com</DrawerSubtitle>
        </DrawerHeader>

        <DrawerContent>
          <List />
        </DrawerContent>
      </Drawer>

      <DrawerAppContent className='drawer-app-content'>
        <TopAppBar title={title} navigationIcon={renderNavigationIcon()} />
        <div className='mdc-top-app-bar--fixed-adjust'>
          {[0, 1, 2, 3, 4, 5].map(renderLoremIpsum)}
        </div>
      </DrawerAppContent>
    </div>
  );
};
export default DrawerScreenshotTest;
