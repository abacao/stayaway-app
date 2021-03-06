/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React, { useMemo } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { useTheme } from '@app/contexts/Theme';

import { getSubmitImageSize } from '@app/common/utils/scalling';

import TopComponent from '@app/common/components/TopComponent';
import Layout from '@app/common/components/Layout';
import Button from '@app/common/components/Button';
import SupportIcon from '@app/common/components/SupportIcon';
import Text from '@app/common/components/FormattedText';
import { getThemedImage } from '@app/common/assets/images';

import { sizes, iconSizes } from '@app/common/theme';

import i18n from '@app/services/i18n';

const styles = (colors) => StyleSheet.create({
  imageContainer: {
    height: getSubmitImageSize(),
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    paddingBottom: sizes.size48,
  },
  closeButtonContainer: {
    backgroundColor: colors.transparent,
  },
  closeButton: {
    marginTop: -sizes.size8,
    marginLeft: -sizes.size8,
    padding: sizes.size8,
    alignSelf: 'flex-start',
  },
  header: {
    marginTop: -100,
    marginBottom: sizes.size48,
  },
  backgroundPanel: {
    backgroundColor: colors.panelWhiteBackgroundColor,
    opacity: 0.93,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: sizes.size8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: sizes.size24,
    paddingVertical: sizes.size24,
  },
  panel: {
    backgroundColor: colors.transparent,
    borderRadius: sizes.size8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  panelContainer: {
    paddingHorizontal: sizes.size24,
    paddingVertical: sizes.size24,
    marginBottom: sizes.size20,
  },
  supportContainer: {
    position: 'absolute',
    bottom: -iconSizes.size30,
    left: sizes.size24,
  },
  inputContainer: {
    marginBottom: sizes.size48,
  },
  title: {
    marginBottom: sizes.size24,
  },
});

export default function Diagnosis (props) {
  const { onPress } = props;

  const { name, colors } = useTheme();
  const memoizedStyle = useMemo(() => styles(colors), [name]);

  return (
    <TopComponent>
      <ImageBackground
        source={getThemedImage('diagnosis', name)}
        style={memoizedStyle.imageContainer}
      />
      <Layout
        padding='horizontal'
        style={memoizedStyle.contentContainer}
      >
        <View style={memoizedStyle.header}>
          <View style={memoizedStyle.backgroundPanel} />
          <View style={memoizedStyle.panel}>
            <View style={memoizedStyle.panelContainer}>
              <Text size='xlarge' weight='bold' style={memoizedStyle.title}>{i18n.translate('screens.diagnosis.completed.title')}</Text>
              <Text>{i18n.translate('screens.diagnosis.completed.description')}</Text>
            </View>
            <View style={memoizedStyle.supportContainer}>
              <SupportIcon />
            </View>
          </View>
        </View>
        <Button
          title={i18n.translate('common.actions.ok')}
          accessibilityLabel={i18n.translate('screens.diagnosis.completed.accessibility.label')}
          accessibilityHint={i18n.translate('screens.diagnosis.completed.accessibility.hint')}
          containerStyle={memoizedStyle.button}
          onPress={onPress}
        />
      </Layout>
    </TopComponent>
  );
}

Diagnosis.defaultProps = {
  onPress: () => {},
};

Diagnosis.propTypes = {
  onPress: PropTypes.func,
};
