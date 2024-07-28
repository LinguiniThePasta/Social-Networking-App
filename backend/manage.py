import os
import sys
import subprocess


def run_vite_server():
    """Run the Vite development server."""
    frontend_dir = os.path.join(os.path.dirname(__file__), '../frontend')
    subprocess.Popen(['npm', 'run', 'dev'], cwd=frontend_dir, shell=True)


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    if len(sys.argv) > 1 and sys.argv[1] == 'runserver':
        run_vite_server()

    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()