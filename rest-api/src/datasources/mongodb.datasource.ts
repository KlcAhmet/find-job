import {
  inject, lifeCycleObserver,
  LifeCycleObserver, ValueOrPromise
} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: "",
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'findjob',
  useNewUrlParser: true
};

@lifeCycleObserver('datasource')
export class MongoDB extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
      dsConfig: object = config,
  ) {
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {}

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}