import { Col, Typography } from '@peersyst/react-components';
import clsx from 'clsx';
import { useState } from 'react';
import Button from 'ui/common/components/input/Button/Button';
import IconCard from 'ui/common/components/surface/IconCard/IconCard';
import { LockIcon } from 'ui/common/icons';
import { useTranslate } from 'ui/locale';
import useNetworkReserve from 'ui/network/hooks/useNetworkReserve';

import ActivateAccountModal from '../ActivateAccountModal/ActivateAccountModal';
import { AccountNotActiveRoot } from './AccountNotActive.styles';

export interface AccountNotActiveProps {
  className?: string;
  style?: React.CSSProperties;
}

function AccountNotActive({ className, ...rest }: AccountNotActiveProps) {
  const translate = useTranslate();
  const [modalOpened, setModalOpened] = useState(false);
  const { data: { baseReserveCostInXrp } = {} } = useNetworkReserve();

  return (
    <>
      <AccountNotActiveRoot alignItems="center" className={clsx('AccountNotActive', className)} {...rest}>
        <Col alignItems="center" css={{ width: '100%', paddingTop: '1rem' }} gap="2rem">
          <IconCard Icon={LockIcon} />
        </Col>
        <Col gap="1rem" css={{ padding: '0 3rem' }}>
          <Typography variant="h3" textAlign="center">
            {translate('accountNotActiveTitle')}
          </Typography>
          <Typography variant="body1" light textAlign="center">
            {translate('accountNotActiveText', { baseReserveCostInXrp })}
          </Typography>
        </Col>
        <Button onClick={() => setModalOpened(true)} variant="primary">
          {translate('accountNotActiveCTA')}
        </Button>
      </AccountNotActiveRoot>
      <ActivateAccountModal open={modalOpened} onClose={() => setModalOpened(false)} />
    </>
  );
}

export default AccountNotActive;
