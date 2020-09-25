/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import i18n, { languages } from '@app/services/i18n';

import Info from '@settings/components/Info';

describe('Info Screen', () => {
  describe('Info renders correctly', () => {
    it('When infection status is infected.', () => {
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
          isInfected
        />,
      );

      const trackingButton = queryByA11yLabel(i18n.translate('screens.settings.tracking.accessibility.label'));

      expect(trackingButton).toBeTruthy();

      expect(trackingButton).toBeDisabled();
    });
    it('When infection status is not infected.', () => {
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
        />,
      );

      const trackingButton = queryByA11yLabel(i18n.translate('screens.settings.tracking.accessibility.label'));

      expect(trackingButton).toBeTruthy();

      expect(trackingButton).toBeEnabled();
    });
    it('When tracking is enabled.', () => {
      const { queryByText, queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
        />,
      );

      const trackingSwitch = queryByA11yLabel(i18n.translate('screens.settings.tracking.accessibility.label'));
      const trackingText = queryByText(i18n.translate('common.words.enabled'));
      const descriptionText = queryByText(i18n.translate('screens.settings.tracking.description.enabled'));

      expect(trackingText).toBeTruthy();
      expect(trackingSwitch).toBeTruthy();
      expect(descriptionText).toBeTruthy();

      expect(trackingSwitch.props.accessibilityValue.text).toBe(true);
    });
    it('When tracking is disabled.', () => {
      const { queryByText, queryByA11yLabel } = render(
        <Info
          language={languages.EN}
        />,
      );

      const trackingSwitch = queryByA11yLabel(i18n.translate('screens.settings.tracking.accessibility.label'));
      const trackingText = queryByText(i18n.translate('common.words.disabled'));
      const descriptionText = queryByText(i18n.translate('screens.settings.tracking.description.disabled'));

      expect(trackingText).toBeTruthy();
      expect(trackingSwitch).toBeTruthy();
      expect(descriptionText).toBeTruthy();

      expect(trackingSwitch.props.accessibilityValue.text).toBe(false);
    });
    it('When language is EN.', () => {
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
        />,
      );

      const languageButton = queryByA11yLabel(i18n.translate('screens.settings.language.accessibility.label'));

      expect(languageButton).toBeTruthy();

      expect(languageButton.props.accessibilityValue.text).toBe(languages.EN.name);
    });
    it('When language is PT.', () => {
      const { queryByA11yLabel } = render(
        <Info
          language={languages.PT}
          trackingEnabled
        />,
      );

      const languageButton = queryByA11yLabel(i18n.translate('screens.settings.language.accessibility.label'));

      expect(languageButton).toBeTruthy();

      expect(languageButton.props.accessibilityValue.text).toBe(languages.PT.name);
    });
  });
  describe('Info buttons interaction work', () => {
    it('When press close button.', () => {
      const onClose = jest.fn();
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
          onClose={onClose}
        />,
      );

      const closeButton = queryByA11yLabel(i18n.translate('screens.settings.actions.back.accessibility.label'));

      expect(closeButton).toBeTruthy();
      fireEvent.press(closeButton);
      expect(onClose).toHaveBeenCalled();
    });
    it('When press tracking button.', () => {
      const onPressTracking = jest.fn();
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
          onPressTracking={onPressTracking}
        />,
      );

      const trackingButton = queryByA11yLabel(i18n.translate('screens.settings.tracking.accessibility.label'));

      expect(trackingButton).toBeTruthy();
      fireEvent.press(trackingButton);
      expect(onPressTracking).toHaveBeenCalled();
    });
    it('When press language button.', () => {
      const onPressLanguage = jest.fn();
      const { queryByA11yLabel } = render(
        <Info
          language={languages.PT}
          trackingEnabled
          onPressLanguage={onPressLanguage}
        />,
      );

      const languageButton = queryByA11yLabel(i18n.translate('screens.settings.language.accessibility.label'));

      expect(languageButton).toBeTruthy();
      fireEvent.press(languageButton);
      expect(onPressLanguage).toHaveBeenCalled();
    });
    it('When press how to use button.', () => {
      const onPressHowToUse = jest.fn();
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
          onPressHowToUse={onPressHowToUse}
        />,
      );

      const howToUseButton = queryByA11yLabel(i18n.translate('screens.settings.how_to_use.accessibility.label'));

      expect(howToUseButton).toBeTruthy();
      fireEvent.press(howToUseButton);
      expect(onPressHowToUse).toHaveBeenCalled();
    });
    it('When press faqs button.', () => {
      const onPressFaqs = jest.fn();
      const { queryByA11yLabel } = render(
        <Info
          language={languages.EN}
          trackingEnabled
          onPressFaqs={onPressFaqs}
        />,
      );

      const faqsButton = queryByA11yLabel(i18n.translate('screens.settings.faqs.accessibility.label'));

      expect(faqsButton).toBeTruthy();
      fireEvent.press(faqsButton);
      expect(onPressFaqs).toHaveBeenCalled();
    });
  });
});
