'use babel';

export const configsFolderNotFound = () => {
  atom.notifications.addWarning('Multiple Remote FTP: ftpconfigs folder not found', {
    detail: 'Please create a /ftpconfigs folder at the root of your project.',
    true,
  });
};

export const configsNotFound = () => {
  atom.notifications.addWarning('Multiple Remote FTP: {name}.ftpconfig files not found', {
    detail: 'Please create {name}.ftpconfig files inside /ftpconfigs folder.',
    true,
  });
};

export const projectRequired = () => {
  atom.notifications.addWarning('Multiple Remote FTP: requires a project to work properly.', {
    detail: '',
    true,
  });
};

export const fileFormatNotvalid = (file) => {
  atom.notifications.addWarning('Multiple Remote FTP: Wrong file format', {
    detail: `file ${file} has a wrong format. Correct format is {name}.ftpconfig`,
    true,
  });
};

export const isGenericError = (detail) => {
  atom.notifications.addError('Multiple Remote FTP', {
    detail,
    true,
  });
};
