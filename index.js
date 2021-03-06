/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'Make sure you are always breathing.',
                'Life is a mystery – mystery of beauty, bliss and divinity. Meditation is the art of unfolding that mystery.',
                'If you want to conquer the anxiety of life, live in the moment, live in the breath.',
                'So what is a good meditator? The one who meditates.',
                'While meditating we are simply seeing what the mind has been doing all along.',
                'Meditation is a way for nourishing and blossoming the divine within you',
                'Words are but the shell; meditation is the kernel.',
                'When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.',
                'The you that goes in one side of the meditation experience is not the same you that comes out the other side.',
                'Peace comes from within. Do not seek it without.',
                'There are two mistakes one can make along the road to truth: not going all the way, and not starting.',
                'When you realize how perfect everything is, you will tilt your head back and laugh at the sky.',
                'If you cultivate the attitude of indifference towards the mind, gradually you will cease to identify with it.',
            ],
            SKILL_NAME: 'Meditation Station',
            GET_FACT_MESSAGE: "Salutations! Welcome to meditation station.",
            HELP_MESSAGE: 'You can say help me with some meditation, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Be sure to visit agile kinetics dot com to learn how you can improve your meditation practice. Namaste!',
            PROMO: 'Be sure to visit agile kinetics dot com to learn how you can improve your meditation practice. Namaste!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Make sure you are always breathing.',
                'Life is a mystery – mystery of beauty, bliss and divinity. Meditation is the art of unfolding that mystery.',
                'If you want to conquer the anxiety of life, live in the moment, live in the breath.',
                'So what is a good meditator? The one who meditates.',
                'While meditating we are simply seeing what the mind has been doing all along.',
                'Meditation is a way for nourishing and blossoming the divine within you',
                'Words are but the shell; meditation is the kernel.',
                'When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.',
                'The you that goes in one side of the meditation experience is not the same you that comes out the other side.',
                'Peace comes from within. Do not seek it without.',
                'There are two mistakes one can make along the road to truth: not going all the way, and not starting.',
                'When you realize how perfect everything is, you will tilt your head back and laugh at the sky.',
                'If you cultivate the attitude of indifference towards the mind, gradually you will cease to identify with it.',
            ],
            SKILL_NAME: 'Meditation Station',
            GET_FACT_MESSAGE: "Salutations! Welcome to meditation station.",
            HELP_MESSAGE: 'You can say help me with some meditation, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Be sure to visit agile kinetics dot com to learn how you can improve your meditation practice. Namaste!',
            PROMO: 'Be sure to visit agile kinetics dot com to learn how you can improve your meditation practice. Namaste!',

        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + " " + randomFact + " " + this.t('PROMO');
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
