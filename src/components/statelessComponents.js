import React from 'react';

export const Days = (props) => {
    return (
      <div>
          <span className="span span--block text---center text--size-large">
              {(props.val) ? props.val : null }
          </span>
          <span className="span span--block text--center">
              Days
          </span>
      </div>
    )
  }

export const Hours = (props) => {
    return (
      <div>
          <span className="span span--block text--center text--size-large">
              {props.val}
          </span>
          <span className="span span--block text--center">
            小时
          </span>
      </div>
    )
  }

export const Seconds = (props) => {
    return (
      <div>
          <span className="span span--block text--center text--size-large">
              {props.val}
          </span>
          <span className="span span--block text--center">
            秒钟
          </span>
      </div>
    )
  }

  export const Minutes = (props) => {
    return (
      <div>
          <span className="span span--block text--center text--size-large">
              {props.val}
          </span>
          <span className="span span--block text--center">
            分钟
          </span>
      </div>
    )
  }