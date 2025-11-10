"use client";

interface PasswordStrengthProps {
  password: string;
}

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: PasswordRequirement[] = [
  {
    label: "At least 8 characters",
    test: password => password.length >= 8,
  },
  {
    label: "One uppercase letter",
    test: password => /[A-Z]/.test(password),
  },
  {
    label: "One lowercase letter",
    test: password => /[a-z]/.test(password),
  },
  {
    label: "One number",
    test: password => /\d/.test(password),
  },
  {
    label: "One special character",
    test: password => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const passedRequirements = requirements.filter(req => req.test(password));
  const strength = passedRequirements.length;

  const getStrengthColor = () => {
    if (strength === 0) return "bg-gray-200";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (strength === 0) return "Very Weak";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Fair";
    if (strength <= 4) return "Good";
    return "Strong";
  };

  if (!password) return null;

  return (
    <div className="space-y-2">
      {/* Strength Bar */}
      <div className="flex items-center gap-2">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full transition-all duration-300 ${getStrengthColor()}`}
            style={{ width: `${(strength / requirements.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-600">
          {getStrengthText()}
        </span>
      </div>
    </div>
  );
}
