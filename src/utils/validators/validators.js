import React from 'react'

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;


export const maxLength50 = maxLength(50);
export const minLength2 = minLength(2);
