const completionSpec: Fig.Spec = {
  name: "tmuxinator",
  description: "Tmuxinator is a ruby gem that allows you to easily manage tmux sessions by using yaml files to describe the layout of a tmux session, and open up that session with a single command",
  subcommands: [
    {
      name: "commands",
      description:
        "Lists commands available in tmuxinator",
    },
    {
      name: "completions",
      description:
        "Used for shell completion",
    },
    {
      name: "copy",
      description:
        "Copy an existing project to a new project and open it in your editor",
      args: [{
        name: "EXISTING",
        description: "The existing project",
        isOptional: true,
      },
      {
        name: "NEW",
        description: "Name new project",
        isOptional: true,
      },
      ],
    },
    {
      name: "debug",
      description:
        "Output the shell commands that are generated by tmuxinator",
      args: [{
        name: "PROJECT",
        description: "The existing project",
        isOptional: true,
      },
      {
        name: "ARGS",
        description: "Argument",
        isOptional: true,
      },
      ],
    },
    {
      name: "delete",
      description:
        "Deletes given project",
      args: [{
        name: "PROJECT1",
        description: "Project name 1",
        isOptional: true,
      },
      {
        name: "PROJECT1",
        description: "Project name 1",
        isOptional: true,
      },
      ],
    },
    {
      name: "doctor",
      description:
        "Look for problems in your configuration",
    },
    {
      name: "help",
      description: "Describe available commands or one specific command",
      args: {
        name: "COMMAND",
        description: "Command name you need help for",
        isOptional: true,
      },
    },
    {
      name: "implode",
      description:
        "Deletes all tmuxinator projects",
    },
    {
      name: "list",
      description:
        "Lists all tmuxinator projects",
    },
    {
      name: "local",
      description:
        "Start a tmux session using ./.tmuxinator.y[a]ml",
    },
    {
      name: "new",
      description: "Create a new project file and open it in your editor",
      args: [{
        name: "PROJECT",
        description: "Project name 1",
        isOptional: true,
      },
      {
        name: "Session",
        description: "Session name",
        isOptional: true,
      },
      ],
    },
    {
      name: "start",
      description:
        "Start a tmux session using a project's name (with an optional [ALIAS] for project reuse) or a path to a project config file",
      args: [{
        name: "PROJECT",
        description: "Project name 1",
        isOptional: true,
      },
      {
        name: "ARGS",
        description: "Argument",
        isOptional: true,
      },
      ],
    },
    {
      name: "stop",
      description:
        "Stop a tmux session using a project's tmuxinator config",
      args: [{
        name: "PROJECT",
        description: "Project name 1",
        isOptional: true,
      },
      {
        name: "version",
        description: "Display installed tmuxinator version",
      },
      ],
    },
  ],
};

export default completionSpec;